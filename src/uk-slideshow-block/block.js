// THE DEFAULT/STANDARD UIKIT BLOCK
// Duplicate this code and make your new block
// Doesn't come with any styles

//  Import CSS.
import './style.scss';
import './editor.scss';

// Import icon
import icon from '../icon';

const { __ } = wp.i18n; 
const { registerBlockType } = wp.blocks;
const { InspectorControls, InnerBlocks } = wp.editor;
const {
	TextControl,
	SelectControl,
    PanelBody,
    PanelRow,
	RadioControl
} = wp.components;


registerBlockType( 'cgb/uk-slideshow-block', {

	title: __( 'uk-slideshow-block' ), // Block title.
	icon, 								// Block icon
	category: 'common', 				// Block category
	keywords: [ 						// Search by these keywords
		__( 'uk', 'UK', 'uikit' ),
	],

	attributes: {
		slideshowAttributes: {
			default: '',
			slideshowAttributes: ''
		},

		visibility_verb: {
			default: '',
			visibility_verb: ''
		},
		visibility_size: {
			default: '',
			visibility_size: ''
		},
		visibility_class: {
			default: '',
			visibility_class: ''
		},
		width_x: {
			default: '',
			width_x: ''
		},
		width_y: {
			default: '',
			width_y: ''
		},
		width_class: {
			default: '',
			width_class: ''
		},
		textAlign: {
			default: '',
			textAlign: ''
		},
		marginRadio: {
			default: '',
			marginRadio: ''
		}
	},

	edit: function( props ) {
		return [

			
			<InspectorControls>
				<PanelBody
					title={ __( 'Set Slideshow Attribute', 'uk-slideshow-item-block' ) }
				>
					<PanelRow>
						<TextControl
							label="Write the slideshow attributes you want here. (separated by a semicolon)"
							value={ props.attributes.slideshowAttributes }
							onChange={ ( value ) => props.setAttributes( { slideshowAttributes: value } ) }
						/>
					</PanelRow>
				</PanelBody>

				{/* ##########DEFAULT CONTROLS########## */}

				{/* VISIBILITY */}
				<PanelBody
					title={ __( 'Set visibility?', 'uk-slideshow-block' ) }
				>
					<h4>uk-visibility-</h4>
					<PanelRow>
						<SelectControl 
							label='Choose visibility type:'
							options={[
									{ label: 'None', value: '' },
									{ label: 'Hidden', value: 'hidden' },
									{ label: 'Visible', value: 'visible' },
								]}
							onChange={( value ) => {
								props.setAttributes( { visibility_verb: value } );
								if(value != '' && visibility_size != '') {
									props.setAttributes( { visibility_class: `uk-${value}@${props.attributes.visibility_size}` } );
								} else if(value == '' || props.attributes.visibility_size == '') {
									props.setAttributes( { visibility_class: '' } );
								}
							}}
							
							value={props.attributes.visibility_verb}
						/>
					</PanelRow>
					<h4>@</h4>
					<PanelRow>
						<SelectControl 
							label='at'
							options={[
									{ label: 'None', value: '' },
									{ label: 'Small', value: 's' },
									{ label: 'Medium', value: 'm' },
									{ label: 'Large', value: 'l' },
									{ label: 'XLarge', value: 'xl' },
								]}
							onChange={( value ) => {
								props.setAttributes( { visibility_size: value } );
								if(value != '' && props.attributes.visibility_verb != '') {
									props.setAttributes( { visibility_class: `uk-${props.attributes.visibility_verb}@${value}` } );
								} else if(value == '' || props.attributes.visibility_verb == '') {
									props.setAttributes( { visibility_class: '' } );
								}
							}}
							
							value={props.attributes.visibility_size}
						/>
					</PanelRow>
				</PanelBody>

				{/* WIDTH */}
				<PanelBody
					title={ __( 'Set width?', 'uk-slideshow-block' ) }
				>
					<h4>uk-width-</h4>
					<PanelRow>
						<SelectControl 
							label='X'
							options={[
									{ label: 'None', value: '' },
									{ label: '1', value: '1' },
									{ label: '2', value: '2' },
									{ label: '3', value: '3' },
									{ label: '4', value: '4' },
									{ label: '5', value: '5' },
									{ label: '6', value: '6' },
								]}
							onChange={( value ) => {
								props.setAttributes( { width_x: value } );
								if(value != '' && props.attributes.width_y != '') {
									props.setAttributes( { width_class: `uk-width-${value}-${props.attributes.width_y}` } );
								} else if(value == '' || props.attributes.width_y == '') {
									props.setAttributes( { width_class: '' } );
								}
							}}
							
							value={props.attributes.width_x}
						/>
					</PanelRow>
					<h4>of</h4>
					<PanelRow>
						<SelectControl 
							label='Y'
							options={[
									{ label: 'None', value: '' },
									{ label: '1', value: '1' },
									{ label: '2', value: '2' },
									{ label: '3', value: '3' },
									{ label: '4', value: '4' },
									{ label: '5', value: '5' },
									{ label: '6', value: '6' },
								]}
							onChange={( value ) => {
								props.setAttributes( { width_y: value } );
								if(value != '' && props.attributes.width_x != '') {
									props.setAttributes( { width_class: `uk-width-${props.attributes.width_x}-${value}` } );
								} else if(value == '' || props.attributes.width_x == '') {
									props.setAttributes( { width_class: '' } );
								}
							}}
							
							value={props.attributes.width_y}
						/>
					</PanelRow>
				</PanelBody>
				{/* MARGIN */}
				<PanelBody
					title={ __( 'Add margin?', 'uk-slideshow-block' ) }
				>
					<PanelRow>
						<RadioControl 
							label='Pick a margin setting'
							options={[
									{ label: 'None', value: '' },
									{ label: 'Small', value: 'uk-margin-small' },
									{ label: 'Medium', value: 'uk-margin-medium' },
									{ label: 'Large', value: 'uk-margin-large' },
									{ label: 'Extra Large', value: 'uk-margin-xlarge' },
									{ label: 'Auto (Horizontally Center)', value: 'uk-margin-auto' },
								]}
							onChange={( value ) => {
								props.setAttributes( { marginRadio: value } );
							}}
							
							selected={props.attributes.marginRadio}
						/>
					</PanelRow>
				</PanelBody>

				{/* TEXT ALIGN */}
				<PanelBody title={ __( 'Text Align', 'uk-slideshow-block' ) } >
					<PanelRow>
						<RadioControl 
							label='Pick an alignment'
							options={[
									{ label: 'None', value: '' },
									{ label: 'Left', value: 'uk-text-left' },
									{ label: 'Right', value: 'uk-text-right' },
									{ label: 'Center', value: 'uk-text-center' },
									{ label: 'Justify', value: 'uk-text-justify' },
								]}
							onChange={( value ) => {
								props.setAttributes( { textAlign: value } );
							}}							
							selected={props.attributes.textAlign}
						/>
					</PanelRow>
				</PanelBody>
				{/* ################################### */}
			</InspectorControls>
			,
			<div className={ 'uk-slideshow' }>
				<p className={ 'directions' }>Place slideshow item blocks here.</p>
				<InnerBlocks />
			</div>
		];
	},
//
	save: function( props ) {
		return (
			<div className={`uk-position-relative uk-visible-toggle uk-light ${props.attributes.marginRadio} ${props.attributes.textAlign} ${props.attributes.width_class} ${props.attributes.visibility_class}`}  uk-slideshow={props.attributes.slideshowAttributes} tabindex="-1">
				<ul className={'uk-slideshow-items'}>
					<InnerBlocks.Content />
				</ul>

				<a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="" uk-slideshow-item="previous"></a>
            	<a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="" uk-slideshow-item="next"></a>
				
			</div>
		);
	},
} );
