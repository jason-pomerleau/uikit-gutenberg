// THE DEFAULT/STANDARD UIKIT BLOCK
// Duplicate this code and make your new block
// Doesn't come with any styles

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { InspectorControls } = wp.editor;
const {
    PanelBody,
    PanelRow,
	RadioControl
} = wp.components;


registerBlockType( 'cgb/default-uikit-block', {

	title: __( 'default-uikit-block' ), // Block title.
	icon: 'shield', 					// Block icon
	category: 'common', 				// Block category
	keywords: [ 						// Search by these keywords
		__( 'uk', 'UK', 'uikit' ),
	],

	attributes: {
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
				{/* ##########DEFAULT CONTROLS########## */}

				{/* WIDTH */}
				<PanelBody
					title={ __( 'Set width?', 'default-uikit-block' ) }
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
									props.setAttributes( { width_class: `uk-width-${value}-${props.attributes.width_x}` } );
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
					title={ __( 'Add margin?', 'default-uikit-block' ) }
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
				<PanelBody title={ __( 'Text Align', 'default-uikit-block' ) } >
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
			<div className={`uk-`}>
			</div>
		];
	},

	save: function( props ) {
		return (
			<div className={``}>
		   	</div>
		);
	},
} );
