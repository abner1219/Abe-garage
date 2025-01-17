import React from 'react'
import Admin from '../../components/Admin/AdminPage/Admin';
import AddEmployee from '../../components/Admin/AddEmployee/AddEmployee'

function AddEmployeePage() {
  return (
		<>
			<div className="container-fluid admin-page">
				<div className="row">
					<div className="col-md-3 admin-left-side">
						<Admin />
					</div>
					<div className=" col-md-9 admin-right-side">
                        <AddEmployee />
                    </div>
				</div>
			</div>
		</>
	);
}

export default AddEmployeePage;