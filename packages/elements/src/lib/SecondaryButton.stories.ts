const Template = (args: { label: string; dimension: string; disabled: boolean }) => `
  <my-secondary-button
    appearance="outline"
    class="my-secondary-button-${args.dimension.toLowerCase()}"
    ${args.disabled ? 'disabled="disabled"' : ''}
  >
    ${args.label}
  </my-secondary-button>`;

export default {
  title: 'Button',
  argTypes: {
    dimension: {
      options: ['Default', 'Medium', 'Compact'],
      control: { type: 'select' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export const Secondary = Template.bind({});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(Secondary as any).args = {
  label: 'Secondary Button',
  dimension: 'Default',
  disabled: false,
};
