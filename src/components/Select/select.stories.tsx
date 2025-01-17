import FormSelect from ".";
import { ComponentStory, ComponentMeta } from '@storybook/react';
export default {
    title: 'CommonComponents/Select',
    component: FormSelect,
    argTypes: {
        variant: {
            options: ['outlined', 'filled'],
            control: { type: 'radio' },
        },
        size: {
            options: ['small', 'medium'],
            control: { type: 'radio' },
        },
        optionsType: {
            options: ['default', 'checkbox', 'chips'],
            control: { type: 'radio' }
        }
    }
} as ComponentMeta<typeof FormSelect>

const options1 = [
    { label: 'Oliver Hansen', value: 'Oliver Hansen' },
    { label: 'Van Henry', value: 'Van Henry' },
    { label: 'April Tucker', value: 'April Tucker' },
    { label: '3insys', value: '3insys' }
];

const getSelectedValue = (val: any) => {
    console.log(val)
}
const Template: ComponentStory<typeof FormSelect> = (args) => <FormSelect {...args} />

export const FormComponent = Template.bind({});

FormComponent.args = {
    variant: "outlined",
    size: 'small',
    multiple: false,
    options: options1,
    optionsType: "default",
    itemHeight :48,
    itemPaddingTop: 8,
    itemWidth:20,
    sx: {
        backgroundColor: ""
    },
    itemStyles:{

    },
    getSelectedValue: getSelectedValue
};