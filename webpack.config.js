'use strict';

let path = require('path'); // для корректной работы с путями
const fs = require('fs');
// подключение плагина
const HTMLWebpackPlugin = require('html-webpack-plugin'); 
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); 
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMqpackerPlugin = require('css-mqpacker-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

// Pages const for HTMLWebpackPlugin
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#html-dir-folder

const PAGES_DIR = `${path.resolve(__dirname, 'src')}/pug/pages/`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

//возвращает оптимизированный объект
const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    };

    if (isProd) {
        config.minimizer = [
            new TerserPlugin(),
            new CssMqpackerPlugin() //объединяет медиа-запросы
        ];
    }

    return config;
};

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: ['@babel/polyfill', './index.js'],
    output: {
        filename: '[name].js', //[name] автоматически копируемое имя
        path: path.resolve(__dirname, 'docs') //docs для github'а deployment
    },
    plugins: [
        // new HTMLWebpackPlugin({    //подключаем плагин всегда через new
        //         filename: 'index.html',    
        //         template: './index.html', //используем шаблон
        //         minify: {
        //             collapseWhitespace: isProd, //минифицирует html в production, по умолчанию true
        //             removeComments: isProd //удаляет комменты
        //         }
        // }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                { //для папки с созданием такой же папки (иначе скопирует только содержимое)
                    from: path.resolve(__dirname, 'src/images/icon'),
                    to: path.resolve(__dirname, 'docs/images/icon')
                },
                {
                    from: path.resolve(__dirname, 'src/fonts'),
                    to: path.resolve(__dirname, 'docs/fonts')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        // Automatic creation any html pages (Don't forget to RERUN dev server)
        // see more: https://github.com/vedees/webpack-template/blob/master/README.md#create-another-html-files
        // best way to create pages: https://github.com/vedees/webpack-template/blob/master/README.md#third-method-best
        ...PAGES.map(page => new HTMLWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            filename: `./${page.replace(/\.pug/,'.html')}`
        }))
    ],
    module: {
        rules: [
            // {
            //     test: /\.css$/i,
            //     use: [MiniCssExtractPlugin.loader, "css-loader"],
            // },
            {
                test: /\.pug$/,
                use: ['pug-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false //иначе не работают background url
                        },
                    },
                    "sass-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                    presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 70
                            },
                            optipng: {
                                
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 70
                            }
                            }
                        },
                    },
                    ]
            },
            {
                test: /\.(woff|woff2|ttf|otf|eot)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    }
                    ]
            }
        ]
    },
    optimization: optimization(),
    devServer: {
        port: 4200,
        hot: isDev
    }
};