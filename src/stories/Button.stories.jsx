import Button from "../components/Button";

const obj = {
    backgroundColor: 'blue'
}

export default {
    title: "Button",
    component: Button,
    argTypes: { onMouseEnter: { action: obj } }
}

export const Primary = (args) => <Button {...args} />

Primary.args = {
    label: 'Press Me',
    // onMouseEnter: {...obj},
}

// Primary.parameters = {
//     previewTabs: {
//         canvas: {
//             hidden: true,
//         },
//     },
//     viewMode: 'docs',
// };

// componentSource: {
//     code:'export default "This is my code"',
//     language: 'javascript',
// },