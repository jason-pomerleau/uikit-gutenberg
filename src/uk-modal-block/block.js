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
const { InspectorControls, RichText } = wp.editor;
const {
	SelectControl,
    PanelBody,
    PanelRow,
	RadioControl,
	TextControl
} = wp.components;


registerBlockType( 'cgb/uk-modal-block', {

	title: __( 'uk-modal-block' ), 	// Block title.
	icon, 							// Block icon
	category: 'common', 			// Block category
	keywords: [ 					// Search by these keywords
		__( 'uk', 'UK', 'uikit' ),
	],

	attributes: {
		modalId: {
			default: 'first-modal',
			modalId: ''
		},
		title: {
			title: ''
		},
		content: {
			content: ''
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
					title={ __( 'Modal ID', 'uk-modal-block' ) }
				>
					<PanelRow>
						<TextControl
							label='Write an ID for the Modal.'
							onChange={( value ) => {
								props.setAttributes( { modalId: value } );
							}}							
							value={props.attributes.modalId}
						/>
					</PanelRow>
				</PanelBody>
				{/* ##########DEFAULT CONTROLS########## */}

				{/* VISIBILITY */}
				<PanelBody
					title={ __( 'Set visibility?', 'uk-modal-block' ) }
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
					title={ __( 'Set width?', 'uk-modal-block' ) }
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
					title={ __( 'Add margin?', 'uk-modal-block' ) }
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
				<PanelBody title={ __( 'Text Align', 'uk-modal-block' ) } >
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
			<div className={`uk-modal`}>
				<p class="directions">Write an ID for the modal in the side bar.</p>
				<div class="title">
					<RichText
						tagName="div"
						multiline="h2"
						placeholder={ __( 'Add your modal title', 'uk-card') }
						onChange={( value ) => {
							props.setAttributes( { title: value } );
						}}							
						value={ props.attributes.title }
					/>
				</div>
				<RichText
					tagName="div"
					multiline=""
					placeholder={ __( 'Add your modal content', 'uk-card' ) }
					onChange={( value ) => {
						props.setAttributes( { content: value } );
					}}	
					value={ props.attributes.content }
				/>
			</div>
		];
	},

	save: function( props ) {
		return (
			<div>
				<a class="uk-button uk-button-default" href={`#${props.attributes.modalId}`} uk-toggle="">Open</a>

				<div id={`${props.attributes.modalId}`} class="uk-flex-top" uk-modal="">
					<div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">

						<button class="uk-modal-close-default" type="button" uk-close=""></button>

						<h2 class="uk-modal-title">{props.attributes.title}</h2>
						<div>{props.attributes.content}</div>

					</div>
				</div>
			</div>
			
		);
	},
} );
