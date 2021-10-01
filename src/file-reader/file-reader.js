import fs from 'fs';
import { ERRORS, ENCODING } from '../common/constants/constants.js';

class FileReader {
  readInputFile(fileName, cb) {
    if (!fileName) {
      return cb(new Error(ERRORS.NO_FILE_NAME));
    }

    fs.readFile(fileName, { encoding: ENCODING }, (
      err, dataFromFile
    ) => {
      if (err) {
        return cb(new Error(ERRORS.FILE_DOESNT_EXIST));
      }

      dataFromFile.length ?
        cb(null, dataFromFile) :
        cb(new Error(ERRORS.FILE_IS_EMPTY));
    });
  }
}

export default FileReader;