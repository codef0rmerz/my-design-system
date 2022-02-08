const Template = (args: { label: string; dimension: string; disabled: boolean }) => `
  <my-primary-button
    appearance="accent"
    class="my-primary-button-${args.dimension.toLowerCase()}"
    ${args.disabled ? 'disabled="disabled"' : ''}
  >
    ${args.label}
  </my-primary-button>`;

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

export const Primary = Template.bind({});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(Primary as any).args = {
  label: 'Primary Button',
  dimension: 'Default',
  disabled: false,
};
