import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = (props) => {
  const { repo, handleCheckboxChange } = props;
  return (
    <div className="five wide column">
      <div className="ui left floated compact segment">
        <div className="ui toggle checkbox">
          <input id={repo.name} type="checkbox" checked={repo.selected} onChange={() => handleCheckboxChange(repo.name)} />
          <label htmlFor={repo.name}>
            {repo.name}
          </label>
        </div>
      </div>
    </div>
  );
};

Checkbox.propTypes = {
  repo: PropTypes.instanceOf(Object).isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default Checkbox;
