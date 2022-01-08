const fs = require ('fs'); 

const writeFile = readmeContent => {
    return new Promise ((resolve,reject ) => {
        fs.writeFile ('README.md', readmeContent ,err => {
            if(err){
                reject(err);
                return;
            }
            resolve ({
                ok: true,
                message: 'file created'
            });

        });
    
    });
};
module.exports = writeFile;