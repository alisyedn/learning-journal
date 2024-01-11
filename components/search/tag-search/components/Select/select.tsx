import Multiselect from "multiselect-react-dropdown";
import {SelectProps} from "@/components/search/tag-search/components/Select/types";
import {useCallback, useMemo} from "react";
import {TagEntities} from "@/libs/dao/db";

const styles = {
  searchBox: {
    color: '#000000',
    background: '#ffffff',
  },
  inputField: {
    color: '#000',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1.2rem',
  },
  option: {
    color: '#000000',
    letterSpacing: '1px'
  },
  chips: {
    fontFamily: 'Montserrat, sans-serif',
    color: '#ffffff',
    fontSize: '1.1rem',
    background: '#f03e3e',
    padding: '4px 0.5rem',
    borderRadius: '4px'
  }
}

const Select = ({ selectedOptions, options, onChange }: SelectProps) => {

  return (
    <Multiselect
      isObject={false}
      style={styles}
      options={options}
      onSelect={onChange}
      onRemove={onChange}
      selectedValues={selectedOptions}
    />
  )
}

export default Select