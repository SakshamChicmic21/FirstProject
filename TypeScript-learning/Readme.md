PS D:\desktop\TypeScript> tsc --version 
tsc : The term 'tsc' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of the name, 
or if a path was included, verify that the path is correct and try again.
At line:1 char:1
+ tsc --version
+ ~~~
    + CategoryInfo          : ObjectNotFound: (tsc:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException
 
PS D:\desktop\TypeScript> npm i typescript -g

added 1 package in 2s
PS D:\desktop\TypeScript> tsc -v
Version 5.8.2
PS D:\desktop\TypeScript> tsc --version
Version 5.8.2
PS D:\desktop\TypeScript> tsc --init

Created a new tsconfig.json with:                                                                                       
                                                                                                                     TS 
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true


You can learn more at https://aka.ms/tsconfig
PS D:\desktop\TypeScript> "tsc" will create existed file automatically
