
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
	RadioControl,
	RangeControl
} = wp.components;

registerBlockType( 'cgb/uk-grid-block', {
	title: __( 'uk-grid-block' ), 
	icon, 
	category: 'common', 
	keywords: [
		__( 'uk', 'UK' ),
		__( 'Test' ),
		__( 'grid' ),
	],
	attributes: {
		specifyChildWidth: {
			default: 'no',
			specifyChildWidth: ''
		},
		childWidthClass: {
			default: '',
			childWidthClass: ''
		},
		largeGridWidth: {
			default: 4,
			largeGridWidth: 4
		},
		medGridWidth: {
			default: 3,
			medGridWidth: 2
		},
		smallGridWidth: {
			default: 2,
			smallGridWidth: 1
		},
		gridAttribute: {
			default: '',
			gridAttribute: ''
		},
		useScrollspy: {
			default: 'no',
			useScrollspy: ''
		},
		scrollspyAttribute: {
			default: '',
			scrollspyAttribute: ''
		},
		scrollspyTarget: {
			default: '',
			scrollspyTarget: ''
		},
		scrollspyDelay: {
			default: '',
			scrollspyDelay: ''
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
		marginRadio: {
			default: '',
			marginRadio: ''
		},
		textAlign: {
			default: '',
			textAlign: ''
		}
		
	},

	edit: function( props ) {

		return [
			<InspectorControls>
				
				<PanelBody
					title={ __( 'Grid Children Width Sizes', 'uk-grid-block' ) }
				>
					<PanelRow>
					<RadioControl 
							label='Do you want child width sizes specified?'
							options={[
									{ label: 'No', value: 'no' },
									{ label: 'Yes', value: 'yes' },
								]}
							onChange={( value ) => {
								props.setAttributes( { specifyChildWidth: value } );

								// if its true, create the class of all the child widths
								if(props.attributes.specifyChildWidth == 'no') {
									props.setAttributes( { childWidthClass: `uk-child-width-1-${props.attributes.smallGridWidth}@s uk-child-width-1-${props.attributes.medGridWidth}@m uk-child-width-1-${props.attributes.largeGridWidth}@l uk-grid` } );
								} else if(props.attributes.specifyChildWidth == 'yes') {
									props.setAttributes( { childWidthClass: ''} );
								}
							}}
							
							selected={props.attributes.specifyChildWidth}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl
							label="Desktop Grid Children Width" 
							min={2}
							max={6}
							onChange={( value ) => {
								props.setAttributes( { largeGridWidth: value } );
								if(props.attributes.specifyChildWidth == 'yes') {
									props.setAttributes( { childWidthClass: `uk-child-width-1-${props.attributes.smallGridWidth}@s uk-child-width-1-${props.attributes.medGridWidth}@m uk-child-width-1-${value}@l uk-grid` } );
								} else if(props.attributes.specifyChildWidth == 'no') {
									props.setAttributes( { childWidthClass: ''} );
								}
							}}

							value={props.attributes.largeGridWidth}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl
							label="Tablet Grid Children Width" 
							min={1}
							max={4}
							onChange={( value ) => {
								props.setAttributes( { medGridWidth: value } );
								if(props.attributes.specifyChildWidth == 'yes') {
									props.setAttributes( { childWidthClass: `uk-child-width-1-${props.attributes.smallGridWidth}@s uk-child-width-1-${value}@m uk-child-width-1-${props.attributes.largeGridWidth}@l uk-grid` } );
								} else if(props.attributes.specifyChildWidth == 'no') {
									props.setAttributes( { childWidthClass: ''} );
								}
							}}
							value={props.attributes.medGridWidth}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl
							label="Mobile Grid Children Width" 
							min={1}
							max={3}
							onChange={( value ) => {
								props.setAttributes( { smallGridWidth: value } );
								if(props.attributes.specifyChildWidth == 'yes') {
									props.setAttributes( { childWidthClass: `uk-child-width-1-${value}@s uk-child-width-1-${props.attributes.medGridWidth}@m uk-child-width-1-${props.attributes.largeGridWidth}@l uk-grid` } );
								} else if(props.attributes.specifyChildWidth == 'no') {
									props.setAttributes( { childWidthClass: ''} );
								}
							}}
							value={props.attributes.smallGridWidth}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody
					title={ __( 'Grid Attributes', 'uk-grid-block' ) }
				>
					<PanelRow>
						<RadioControl 
							label='Pick an attribute'
							options={[
									{ label: 'None', value: '' },
									{ label: 'Masonry', value: 'masonry: true' },
									{ label: 'Parallax', value: 'parallax: 150' },
								]}
							onChange={( value ) => {
								props.setAttributes( { gridAttribute: value } );
							}}							
							selected={props.attributes.gridAttribute}
						/>
					</PanelRow>
				</PanelBody>




				<PanelBody
					title={ __( 'Scrollspy Attributes', 'uk-grid-block' ) }
				>
					<PanelRow>
						<RadioControl 
							label='Use Scrollspy?'
							options={[
									{ label: 'No', value: 'no' },
									{ label: 'Yes', value: 'yes' },
								]}
							onChange={( value ) => {
								props.setAttributes( { useScrollspy: value } );
								if(value == 'yes' && props.attributes.scrollspyTarget != '' && props.attributes.scrollspyDelay != '') {
									props.setAttributes( { scrollspyAttribute: `target: ${props.attributes.scrollspyTarget}; cls: uk-animation-fade; delay: ${props.attributes.scrollspyDelay}` } );
								} else {
									props.setAttributes( { scrollspyAttribute: ''} );
								}
							}}							
							selected={props.attributes.useScrollspy}
						/>
					</PanelRow>

					<PanelRow>
						<TextControl
							label='Target'
							onChange={( value ) => {
								props.setAttributes( { scrollspyTarget: value } );
								if(props.attributes.useScrollspy == 'yes' && value != '' && props.attributes.scrollspyDelay != '') {
									props.setAttributes( { scrollspyAttribute: `target: ${value}; cls: uk-animation-fade; delay: ${props.attributes.scrollspyDelay}` } );
								} else {
									props.setAttributes( { scrollspyAttribute: ''} );
								}
							}}							
							value={props.attributes.scrollspyTarget}
						/>
					</PanelRow>

					<PanelRow>
						<TextControl
							label='Delay'
							onChange={( value ) => {
								props.setAttributes( { scrollspyDelay: value } );
								if(props.attributes.useScrollspy == 'yes' && props.attributes.scrollspyTarget != '' && value != '') {
									props.setAttributes( { scrollspyAttribute: `target: ${props.attributes.scrollspyTarget}; cls: uk-animation-fade; delay: ${value}` } );
								} else {
									props.setAttributes( { scrollspyAttribute: ''} );
								}
							}}							
							value={props.attributes.scrollspyDelay}
						/>
					</PanelRow>
				</PanelBody>





				{/* ##########DEFAULT CONTROLS########## */}

				{/* VISIBILITY */}
				<PanelBody
					title={ __( 'Set visibility?', 'default-uikit-block' ) }
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

				{/* MARGIN */}
				<PanelBody
					title={ __( 'Add margin?', 'uk-grid-block' ) }
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
				<PanelBody title={ __( 'Text Align', 'uk-grid-block' ) } >
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

			</InspectorControls>,
			<div className={ 'uk-grid' }>
			
				<InnerBlocks />
			</div>
		];
	},

	save: function( props ) {
		return (
			<div className={ `${props.attributes.marginRadio} ${props.attributes.textAlign} ${props.attributes.childWidthClass}` } uk-grid={`${props.attributes.gridAttribute}`} uk-scrollspy={`${props.attributes.scrollspyAttribute}`}>
				<InnerBlocks.Content />
		   	</div>
		);
	},
} );
