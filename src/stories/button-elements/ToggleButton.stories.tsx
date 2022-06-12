import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import ToggleButton from 'components/button-elements/ToggleButton/ToggleButton';
import { ToggleButtonItem } from 'components';

import { CalendarIcon } from '@heroicons/react/solid';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/ButtonElements/ToggleButton',
    component: ToggleButton,
} as ComponentMeta<typeof ToggleButton>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
    <ToggleButton>
        <ToggleButtonItem
            value={ 1 } text="Option 1" handleClick={ (value) => console.log(value) } Icon={ CalendarIcon } />
        <ToggleButtonItem
            value={ 2 } text="Option 2" handleClick={ (value) => console.log(value) } Icon={ CalendarIcon } />
        <ToggleButtonItem
            value={ 3 } text="Option 3" handleClick={ (value) => console.log(value) } Icon={ CalendarIcon } />
    </ToggleButton>
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
