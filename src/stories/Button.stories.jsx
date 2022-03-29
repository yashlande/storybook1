import Button from "../components/Button";

// const obj = {
//     backgroundColor: 'blue'
// }

// export default {
//     title: "Button",
//     component: Button,
//     argTypes: { onMouseEnter: { action: obj } }
// }

export default {
    title: 'Button',
    component: Button,
    parameters: {
        previewTabs: {
            canvas: {
                hidden: true,
            },
        },
        viewMode: 'docs',
        docs: {
            description: {
                component: `Grids and Spacing`,
            },
        },
    },
};
// const Primary = (args) => <Button {...args} />

// export const PrimaryButton = Primary.bind({})

// PrimaryButton.args = {
//     label: 'Press Me',
//     // onMouseEnter: {...obj},
// }

export { default as Button } from '../components/Button';

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