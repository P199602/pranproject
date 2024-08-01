import React, { useContext, useEffect, useCallback, useState } from 'react';
import EmData from "./Context";
import "../Component/style.css";

const Show = () => {
  const { EmpData, setCurrentPage } = useContext(EmData);
  const [selectedGender, setSelectedGender] = useState('All');
  const [selectedCountry, setSelectedCountry] = useState('All');

  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollTop)
    {
      setCurrentPage(prevPage => prevPage+1);
    }
  }, [setCurrentPage]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const filteredData = EmpData.filter(user => {
    const userCountry = user?.address?.country || '';
    const genderMatch = selectedGender === 'All' || user.gender.toLowerCase().trim() === selectedGender.toLowerCase().trim();
    const countryMatch = selectedCountry === 'All' || userCountry.toLowerCase().trim() === selectedCountry.toLowerCase().trim();

    return genderMatch && countryMatch;
  });

  return (
    <div>
      <div className='top-row'>
      <h1>Employess</h1>
      <div className='filter'>
        <div className="filter-controls">
          <label>
            Gender:
            <select value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)}>
              <option value="All">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>

          <label>
            Country:
            <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
              <option value="All">Country</option>
              <option value="United States">USA</option>
              <option value="India">India</option>
              <option value="UK">UK</option>
            </select>
          </label>
        </div>
      </div>
      </div>
      <div className="users-container">
        <table>
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((user , index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td><img src={user.image} alt='Profile' /></td>
                <td>{user.firstName} {user.lastName}</td>
                <td>{user.gender}</td>
                <td>{user.age}</td>
                <td>{user?.address?.country || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Show;
