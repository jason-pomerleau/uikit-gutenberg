//  Import CSS.
import './style.scss';
import './editor.scss';

import icon from '../icon';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { InspectorControls } = wp.editor;
const {
	TextControl,
	SelectControl,
    PanelBody,
    PanelRow,
	RadioControl
} = wp.components;


registerBlockType( 'cgb/uk-slideshow-item-block', {

	title: __( 'uk-slideshow-item-block' ), // Block title.
	icon, 					// Block icon
	category: 'common', 				// Block category
	keywords: [ 						// Search by these keywords
		__( 'uk', 'UK', 'uikit' ),
	],

	attributes: {
		kenBurns: {
			default: '',
			kenBurns: ''
		},
		imageURL: {
			default: 'http://fillmurray.com/500/500',
			imageURL: ''
		},
		imageCaption: {
			default: '',
			imageCaption: ''
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
					title={ __( 'Effects', 'uk-slideshow-item-block' ) }
				>
					<PanelRow>
						<RadioControl 
							label='Do you want the Ken Burns effect?'
							options={[
									{ label: 'No', value: '' },
									{ label: 'Yes, origin left', value: 'uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left' },
									{ label: 'Yes, origin right', value: 'uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-right' },
								]}
							onChange={( value ) => {
								props.setAttributes( { kenBurns: value } );
							}}							
							selected={props.attributes.kenBurns}
						/>
					</PanelRow>
					{/* <PanelRow>
						<TextControl
							label="Content Overlay"
							value={ props.attributes.imageURL }
							onChange={ ( value ) => props.setAttributes( { imageURL: value } ) }
						/>
					</PanelRow> */}
				</PanelBody>

				<PanelBody
					title={ __( 'Set image URL', 'uk-slideshow-item-block' ) }
				>
					<PanelRow>
						<TextControl
							label="Image URL"
							value={ props.attributes.imageURL }
							onChange={ ( value ) => props.setAttributes( { imageURL: value } ) }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Image Caption"
							value={ props.attributes.imageCaption }
							onChange={ ( value ) => props.setAttributes( { imageCaption: value } ) }
						/>
					</PanelRow>
				</PanelBody>




				{/* ##########DEFAULT CONTROLS########## */}

				{/* VISIBILITY */}
				<PanelBody
					title={ __( 'Set visibility?', 'uk-slideshow-item-block' ) }
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
					title={ __( 'Set width?', 'uk-slideshow-item-block' ) }
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
					title={ __( 'Add margin?', 'uk-slideshow-item-block' ) }
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
				<PanelBody title={ __( 'Text Align', 'uk-slideshow-item-block' ) } >
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
			<div className={`uk-slideshow-item`}>
				<p class="directions">See sidebar for configuration of this block</p>
			</div>
		];
	},

	save: function( props ) {
		if(props.attributes.kenBurns != '') {
		return (
			<li>
				<div className={`${props.attributes.kenBurns}`}>
					<img src={props.attributes.imageURL} alt={props.attributes.imageCaption} uk-cover="" />
				</div>
			</li>
		);
		} else if(props.attributes.kenBurns == '') {
			return (
				<li>
					<img src={props.attributes.imageURL} alt={props.attributes.imageCaption} uk-cover="" />
				</li>
			);
		}
	},
} );
