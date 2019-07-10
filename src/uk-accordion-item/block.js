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
const { InspectorControls, InnerBlocks, RichText } = wp.editor;
const {
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
registerBlockType( 'cgb/uk-accordion-item-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'uk-accordion-item-block' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'uk', 'UK' ),
		__( 'Test' ),
		__( 'accordion', 'container' ),
	],
	attributes: {
		isOpen: {
			default: '',
			isOpen: ''
		},
		title: {
			type: 'string',
			multiline: 'h2',
			selector: '.uk-card-title',
		},
		content: {
			type: 'html',
			multiline: 'p',
			selector: '.uk-card-boody',
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

		const onChangeTitle = newTitle => props.setAttributes({title: newTitle});
		const onChangeContent = newContent => props.setAttributes({content: newContent});

		return [
			//.uk-margin-medium
			<InspectorControls>
				<PanelBody
					title={ __( 'Accordion Settings', 'uk-accordion-item-block' ) }
				>
					<PanelRow>
						<RadioControl 
							label='Do you want this item to be open?'
							options={[
									{ label: 'No', value: '' },
									{ label: 'Yes', value: 'uk-open' },
								]}
							onChange={( value ) => {
								props.setAttributes( { isOpen: value } );
							}}							
							selected={props.attributes.isOpen}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>,
			<li className={ 'uk-accordion-item' }>
				<div>
					<RichText
						tagName="div"
						multiline="h2"
						placeholder={ __( 'Add your custom title', 'uk-accordion-item-block') }
						onChange={ onChangeTitle }
						value={ props.attributes.title }
					/>
					<RichText
						tagName="div"
						multiline=""
						placeholder={ __( 'Add your custom content', 'uk-accordion-item-block' ) }
						onChange={ onChangeContent }
						value={ props.attributes.content }
					/>
				</div>
			</li>
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
			<li className={`${props.attributes.isOpen}`}>
				<a class="uk-accordion-title" href="#">{props.attributes.title}</a>
				<div class="uk-accordion-content">
					<p>{props.attributes.content}</p>
				</div>
			</li>
		);
	},
} );
