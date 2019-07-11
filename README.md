

# UIkit Gutenberg Blocks

## Description
A set of blocks widht UIKit classes built into them for the Gutenberg editor in Wordpress. Version 1.0.0

Documentation for [UIKit](https://getuikit.com/docs/introduction)

This project was bootstrapped with [Create Guten Block](https://github.com/ahmadawais/create-guten-block).

## Features
### Current Blocks
- styleless-container, for a styleless div you can add classes to
- uk-container
- uk-grid
- uk-accordion w/ uk-accordion-item
- uk-lightbox w/ uk-lightbox-item
- uk-card

## Get Started

### To Change/Add blocks
1. Open the src folder in terminal
2. Run `npm install`
3. Run `npm run start` to develop, it will build the whole plugin everytime you save
4. Duplicate the 'default-uikit-block'
5. Start developing your block
5. When you finish developing run `npm run build` for a more optimized build
6. Make sure you add your new bloc kto the 'src/blocks.js' file

### To add the blocks to your theme
1. Create a folder in the plugin directory of your theme
2. Add the `dist` folder and the `plugin.php` file to that directory
3. Open one of your posts and type 'uk' inside the block search tool
4. Try out each block and discover the power of UIKit with Gutenberg

## Usage
These blocks aren't made to replace the standard gutenberg blocks, but instead to work with them.

Its very simple, ideally you would start with the uk-container block which would hold all of the other blocks.

If you want to style certain blocks differently outside of wordpress/uikit, you can add the styleless-container block and give it a class which you can use in your styles.

Every block has a few inspector controls that are the same for each, ex. text-align, margin, width, and visibility.

Some blocks have inspector controls that are specific to that block, ex. uk-grid which has a child width selector.


### To request a new block, create an issue. Enjoy!





<!-- Visibility: hidden@ s m l xl
width: uk-width- X of X
Margin: none, small, medium, large, Xlarge, auto
text alignment: right, center, left, justify

put all the common things into one file and share that file with every block -->