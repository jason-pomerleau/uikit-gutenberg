import React from 'react';
//import CommonAttributes from './attributes';

const { __ } = wp.i18n; // Import __() from wp.i18n
const {
    PanelBody,
    PanelRow,
	RadioControl
} = wp.components;

class TextAlign extends React.Component {
  render() {
    return (
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
							// onChange={( value ) => {
							// 	props.setAttributes( { textAlign: value } );
							// }}							
							// selected={props.attributes.textAlign}
						/>
					</PanelRow>
				</PanelBody>
    );
  }
}
// class TextAlign {
//     constructor() {
//       <PanelBody title={ __( 'Text Align', 'default-uikit-block' ) } >
//         <PanelRow>
//           <RadioControl 
//             label='Pick an alignment'
//             options={[
//                 { label: 'None', value: '' },
//                 { label: 'Left', value: 'uk-text-left' },
//                 { label: 'Right', value: 'uk-text-right' },
//                 { label: 'Center', value: 'uk-text-center' },
//                 { label: 'Justify', value: 'uk-text-justify' },
//               ]}
//             onChange={( value ) => {
//               props.setAttributes( { textAlign: value } );
//             }}							
//             selected={props.attributes.textAlign}
//           />
//         </PanelRow>
//       </PanelBody>
//     }
      
// }

export default TextAlign;
  
  