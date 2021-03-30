#!/bin/bash

#Red error
ERROR="\x1B[31mERROR\x1B[0m"
inFolder='\t\t \xE1\xB4\xB8'

function askcmd() {
  while read -r -n 1 answer; do
    if [[ $answer == [YyNn] ]]; then
      [[ $answer == [Yy] ]] && retval=true
      [[ $answer == [Nn] ]] && retval=false
      break
    fi
  done
  echo $retval
}

function enterComponentName() {
  successFlag=false
  while [ "$successFlag" == false ]; do
    read -p "Enter component name: " name
    if [ -z "$name" ]; then
      echo -e "$ERROR: Missed component name!" >&2
    elif [ -e $name ]; then
      echo -e "$ERROR: '$name' component already exists! Choose another name" >&2
    else
      successFlag=true
    fi
  done
  echo $name
}

#CLI
read -e -p "Enter path to your component folder: " path
componentName=$(enterComponentName)

#First letter to upper case
componentName="$(tr a-z A-Z <<<${componentName:0:1})${componentName:1}"

#fill templates with variables above
ComponentTemplate=$"import React, { FC } from 'react';\n\nimport styles from './$componentName.module.scss';\nimport { ${componentName}Props } from './$componentName.types';\n\nconst
${componentName}: FC<${componentName}Props> = () => {\n\treturn <div />;\n};\n\nexport default $componentName;"

indexTemplate=$"export { default as $componentName } from './$componentName';"

typeTemplate=$"export type ${componentName}Props = {};\n"

if [ ! -z "$path" ]; then
  cd $path
fi

echo "Create component $componentName"
mkdir $componentName
cd $componentName
echo "Created files in $path/$componentName:"
echo -e $indexTemplate >>index.ts
echo -e ${inFolder}index.ts
echo -e $ComponentTemplate >>$componentName.tsx
echo -e ${inFolder}$componentName.tsx
echo >>$componentName.module.scss
echo -e ${inFolder}$componentName.module.scss
echo -e $typeTemplate >>$componentName.types.ts

echo -e "\x1B[32mDone\x1B[0m"
