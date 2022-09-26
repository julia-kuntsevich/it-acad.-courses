const fs =require('fs');
const fse =require('fs-extra');


fse.mkdirpSync('./testFolder');
fse.ensureDirSync('./testFolder');
fse.createFileSync('./testFolder/testFile.txt');
fse.ensureDirSync('./testFolder2');
fse.moveSync('./testFolder/testFile.txt','./testFolder2/testFile.txt');
fse.ensureDirSync('./testFolder3');
fse.copySync('./testFolder2/testFile.txt', './testFolder3/testFile.txt');
fse.removeSync('./testFolder2/testFile.txt');
fse.removeSync('./testFolder3/testFile.txt');
fse.removeSync('./testFolder');
fse.removeSync('./testFolder2');
fse.removeSync('./testFolder3');