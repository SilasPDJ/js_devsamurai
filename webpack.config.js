module.exports = {
    entry: "./main.js",
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}


//webpack é um transpilador 
// faz o que o babel faz, mas permite que eu utilize mais de um arquivo para 
// meu desenvolvimento e fazer importação deles. (Pypi)

//yarn add babel-loader -D