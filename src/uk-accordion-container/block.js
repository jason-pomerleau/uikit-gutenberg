/**
 * BLOCK: test-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { InspectorControls, InnerBlocks } = wp.editor;
const {
	SelectControl,
    PanelBody,
    PanelRow,
	RadioControl
} = wp.components;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'uikit-gutenberg/uk-accordion-container-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'uk-accordion-container-block' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'uk', 'UK' ),
		__( 'Test' ),
		__( 'accordion', 'container' ),
	],
	attributes: {
		accordionSetting: {
			default: '',
			accordionSetting: ''
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
		marginRadio: {
			default: '',
			marginRadio: ''
		},
		textAlign: {
			default: '',
			textAlign: ''
		}
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function( props ) {

		return [
			<InspectorControls>
				<PanelBody
					title={ __( 'Accordion Settings', 'uk-accordion-container-block' ) }
				>
					<PanelRow>
						<RadioControl 
							label='Pick an accordion setting (descriptions on UIkit website)'
							options={[
									{ label: 'None', value: '' },
									{ label: 'No collapsing', value: 'collapsible: false' },
									{ label: 'Muptiple open items', value: 'multiple: true' },
								]}
							onChange={( value ) => {
								props.setAttributes( { accordionSetting: value } );
							
							}}							
							
							selected={props.attributes.accordionSetting}
							
						/>
					</PanelRow>
				</PanelBody>

				{/* ##########DEFAULT CONTROLS########## */}

				{/* VISIBILITY */}
				<PanelBody
					title={ __( 'Set visibility?', 'uk-accordion-container-block' ) }
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
					title={ __( 'Set width?', 'uk-accordion-container-block' ) }
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
					title={ __( 'Add margin?', 'uk-accordion-container-block' ) }
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
				<PanelBody title={ __( 'Text Align', 'uk-accordion-container-block' ) } >
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
			<ul className={ 'uk-accordion-container' }>
				<p className={`directions`}>Place uk accordion item blocks in here.</p>
				<InnerBlocks />
			</ul>
		];
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function( props ) {
		return (
			<ul className={`${props.attributes.marginRadio} ${props.attributes.textAlign} ${props.attributes.width_class} ${props.attributes.visibility_class}`} uk-accordion={props.attributes.accordionSetting}>
				<InnerBlocks.Content />
			</ul>
		);
	},
} );
