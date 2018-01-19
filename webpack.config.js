var path = require('path');

module.exports = {
    //入口文件
    entry: './app/index',
    //出口文件
    output:{
        filename:'index.js',
        path:path.resolve(__dirname,'dist'),
        publicPath:'temp/'
    },
    devServer:{
        contentBase:'./',
        host:'localhost',
        compress:true,
        port:1717
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loaders:"babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0",
                query:{
                    presets:['es2015','react','stage-0'],
                    plugins: [
                        ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }] // `style: true` 会加载 less 文件
                    ]
                }
            },
            {
                test:/\.css$/,
                loader:['style-loader',"css-loader"]
            }
        ]
    }
}