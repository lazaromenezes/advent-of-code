#[derive(Clone, Copy)]
pub struct Assignment {
    pub first_section: u32,
    pub last_section: u32,
}

type SectionPair = Vec::<u32>;

impl Assignment {
    pub fn from_text(text: &str) -> Self{
        let sections: SectionPair = text.split('-')
            .map(|i| i.parse::<u32>().unwrap())
            .collect();

        return Self {
            first_section: sections[0],
            last_section: sections[1],
        };
    }

    pub fn contains(&self, other: &Assignment) -> bool {
        return self.first_section <= other.first_section && 
            self.last_section >= other.last_section;
    }

    pub fn is_contained_by(&self, other: &Assignment) -> bool {
        return other.contains(self)
    }

    pub fn overlaps(&self, other: &Assignment) -> bool {
        let mut self_range = self.first_section..=self.last_section;
        let other_range = other.first_section..=other.last_section;

        return self_range
            .any(|s| other_range.contains(&s));
    }
}

pub struct AssignmentPair {
    pub first: Assignment,
    pub second: Assignment,
}

impl AssignmentPair {
    pub fn from_text(text: &str) -> Self{
        let assignments: Vec::<Assignment> = text.split(',')
            .map(|assignment| Assignment::from_text(assignment))
            .collect();

        return Self {
            first: assignments[0],
            second: assignments[1],
        };
    }
}

pub mod app {
   use super::*;
   use std::fs;

   pub fn count_full_contained_from_file(path: &str) -> usize{
       return fs::read_to_string(path)
           .unwrap()
           .trim()
           .split('\n')
           .map(|d| AssignmentPair::from_text(d))
           .filter(|p| p.first.contains(&p.second) || p.first.is_contained_by(&p.second))
           .count();
   }

   pub fn count_overlaps_from_file(path: &str) -> usize{
       return fs::read_to_string(path)
           .unwrap()
           .trim()
           .split('\n')
           .map(|d| AssignmentPair::from_text(d))
           .filter(|p| p.first.overlaps(&p.second))
           .count();
   }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn can_create_assignment_from_text() {
        let text_assignment = "1-4";
        
        let assignment = Assignment::from_text(text_assignment);

        assert_eq!(assignment.first_section, 1);
        assert_eq!(assignment.last_section, 4);
    }

    #[test]
    fn assignment_contains_another() {
        let assignment = Assignment {
            first_section: 2,
            last_section: 8,
        };

        let other_assignment = Assignment {
            first_section: 3,
            last_section: 7
        };

        assert!(assignment.contains(&other_assignment));
    }

    #[test]
    fn assignment_contains_another_using_extremes() {
        let assignment = Assignment {
            first_section: 4,
            last_section: 6,
        };

        let other_assignment = Assignment {
            first_section: 6,
            last_section: 6
        };

        assert!(assignment.contains(&other_assignment));
    }

    #[test]
    fn assignment_does_not_contain_another() {
        let assignment = Assignment {
            first_section: 3,
            last_section: 7,
        };

        let other_assignment = Assignment {
            first_section: 2,
            last_section: 8
        };

        assert!(!assignment.contains(&other_assignment));
    }

    #[test]
    fn assignment_is_contained_by_another_using_extremes() {
        let assignment = Assignment {
            first_section: 6,
            last_section: 6,
        };

        let other_assignment = Assignment {
            first_section: 4,
            last_section: 6
        };

        assert!(assignment.is_contained_by(&other_assignment));
    }

    #[test]
    fn assignment_contained_by_another() {
        let assignment = Assignment {
            first_section: 3,
            last_section: 7,
        };

        let other_assignment = Assignment {
            first_section: 2,
            last_section: 8
        };

        assert!(assignment.is_contained_by(&other_assignment));
    }

    #[test]
    fn assignment_is_not_contained_by_another() {
        let assignment = Assignment {
            first_section: 2,
            last_section: 8,
        };

        let other_assignment = Assignment {
            first_section: 3,
            last_section: 7
        };

        assert!(!assignment.is_contained_by(&other_assignment));
    }

    #[test]
    fn assignment_overlaps_another() {
        let assignment = Assignment {
            first_section: 5,
            last_section: 7,
        };

        let other_assignment = Assignment {
            first_section: 7,
            last_section: 9
        };

        assert!(assignment.overlaps(&other_assignment));
        assert!(other_assignment.overlaps(&assignment));
    }

    #[test]
    fn assignment_does_not_overlap_another() {
        let assignment = Assignment {
            first_section: 2,
            last_section: 4,
        };

        let other_assignment = Assignment {
            first_section: 6,
            last_section: 8
        };

        assert!(!assignment.overlaps(&other_assignment));
        assert!(!other_assignment.overlaps(&assignment));
    }

    #[test]
    fn assignment_pair_can_be_created_from_text() {
        let text = "2-4,6-8";

        let pair = AssignmentPair::from_text(text);

        assert_assignment(&pair.first, 2, 4);
        assert_assignment(&pair.second, 6, 8);
    }

    fn assert_assignment(assignment: &Assignment, first_section: u32, last_section: u32) {
        assert_eq!(assignment.first_section, first_section);
        assert_eq!(assignment.last_section, last_section);
    }
}
