FROM mcr.microsoft.com/devcontainers/cpp:1-ubuntu-22.04

ARG REINSTALL_CMAKE_VERSION_FROM_SOURCE="none"

# Optionally install the cmake for vcpkg
COPY ./reinstall-cmake.sh /tmp/

RUN if [ "${REINSTALL_CMAKE_VERSION_FROM_SOURCE}" != "none" ]; then \
        chmod +x /tmp/reinstall-cmake.sh && /tmp/reinstall-cmake.sh ${REINSTALL_CMAKE_VERSION_FROM_SOURCE}; \
    fi \    
    && rm -f /tmp/reinstall-cmake.sh

# Intall google tests from source
COPY ./install-google-tests.sh /tmp/

RUN chmod +x /tmp/install-google-tests.sh && /tmp/install-google-tests.sh && rm -f /temp/install-google-tests.sh

# [Optional] Uncomment this section to install additional vcpkg ports.
# RUN su vscode -c "${VCPKG_ROOT}/vcpkg install <your-port-name-here>"

# [Optional] Uncomment this section to install additional packages.
#RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
     #&& apt-get -y install --no-install-recommends libcppunit-1.15-0 libcppunit-dev libcppunit-subunit-dev libcppunit-subunit0
