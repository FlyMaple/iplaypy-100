from enum import Enum


class bcolors(Enum):
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'


print(bcolors.HEADER.value + "Hello python." + bcolors.ENDC.value)
print(bcolors.OKBLUE.value + "Hello python." + bcolors.ENDC.value)
print(bcolors.OKGREEN.value + "Hello python." + bcolors.ENDC.value)
print(bcolors.WARNING.value + "Hello python." + bcolors.ENDC.value)
print(bcolors.FAIL.value + "Hello python." + bcolors.ENDC.value)
print(bcolors.BOLD.value + "Hello python." + bcolors.ENDC.value)
print(bcolors.UNDERLINE.value + "Hello python." + bcolors.ENDC.value)

print('===============')


class bcolors2():
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'


print(bcolors2.HEADER + "Hello python." + bcolors2.ENDC)
print(bcolors2.OKBLUE + "Hello python." + bcolors2.ENDC)
print(bcolors2.OKGREEN + "Hello python." + bcolors2.ENDC)
print(bcolors2.WARNING + "Hello python." + bcolors2.ENDC)
print(bcolors2.FAIL + "Hello python." + bcolors2.ENDC)
print(bcolors2.BOLD + "Hello python." + bcolors2.ENDC)
print(bcolors2.UNDERLINE + "Hello python." + bcolors2.ENDC)
