// components/TextareaWithCounter.js
import React from 'react';
import { FormField } from '@sanity/base/components';
import PatchEvent, { set, unset } from '@sanity/form-builder/PatchEvent';
import { TextInput } from '@sanity/ui';

const TextareaWithCounter = React.forwardRef((props, ref) => {
  const { type, value, onChange } = props;

  const handleChange = React.useCallback(
    event => {
      const inputValue = event.target.value;
      onChange(PatchEvent.from(inputValue ? set(inputValue) : unset()));
    },
    [onChange]
  );

  return (
    <FormField label={type.title} description={type.description}>
      <TextInput
        type="text"
        value={value}
        onChange={handleChange}
        ref={ref}
      />
      <div>
        {value?.length || 0}/{type.options.maxLength}
      </div>
    </FormField>
  );
});

export default TextareaWithCounter;
