import React, { useEffect, useState } from 'react';
import { RiAddLine } from 'react-icons/ri';
import { BiEditAlt } from 'react-icons/bi';
import { GiTrashCan } from 'react-icons/gi';

import SearchInput from '../inputs/SearchInput';
import LocationDetails from '../layouts/LocationDetails';
import ProfileForm from '../layouts/ProfileForm';

const PerfPlanning = ({ history, details = {} }) => {
  const [showFormModal, setShowFormModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'EDSG - Employee Profile';
  }, []);

  return (
    <div className="w-100">
      <div className="w-100 flex space-between flex-v-center">
        <h2></h2>
        <LocationDetails />
      </div>
      <div className="w-100 flex space-between m-t-20 flex-v-center">
        <h4 className="san-sherif">Plan your Activities for the year 2021</h4>
        <SearchInput placeholder="Search transactions, invoices or help" />
      </div>
      <div className="table-view m-t-10">
        <div className="table-header">
          <div className="table-row">
            <div className="th"><p className="san-sherif">Target/Goals/Commitment</p></div>
            <div className="th"><p className="san-sherif">KPIs</p></div>
            <div className="th"><p className="san-sherif">Priority </p></div>
            <div className="th"><p className="san-sherif">Weight </p></div>
            <div className="th"><p className="san-sherif">Last Update </p></div>
            <div className="th">
              <button className="add-button pointer" type="button" onClick={() => setShowFormModal(true)}>
                <RiAddLine />
                Add Goals
              </button>
            </div>
          </div>
        </div>
        <div className="table-body">
          {[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }].map((item) => (
            <div className="table-row" key={item.id}>
              <div className="td">Chukwunonso Ugochukwu</div>
              <div className="td">20:11:2020 / 14:05:23PM</div>
              <div className="td">1</div>
              <div className="td">Ugochukwu Ajalla</div>
              <div className="td">Ugochukwu Ajalla</div>
              <div className="td actions">
                <button type="button" className="pointer" onClick={() => setShowFormModal(true)}>
                  <BiEditAlt />
                </button>
                <button type="button" className="m-l-10 del pointer">
                  <GiTrashCan />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showFormModal && <ProfileForm closeModal={() => setShowFormModal(false)} />}
    </div>
  );
};

export default PerfPlanning;
