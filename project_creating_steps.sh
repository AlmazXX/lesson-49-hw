#! /bin/sh
mkdir -p  projects/my_project/directory1/subdirectory1
cd projects/my_project
mkdir -p directory2 directory3/subdirectory3
cd directory2
echo "Hello from JS" > hello.txt