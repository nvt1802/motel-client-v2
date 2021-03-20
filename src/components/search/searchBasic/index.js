import React from 'react'

export default function SearchBasic(props) {

  return <>
    <div className="row">
      <div className="form-group col-12">
        {props?.search?.province &&
          <select name="province" id="province" className="form-control form-control-sm cursor border-radius-45">
            <option value={-1}>Chọn Tỉnh/Thành phố</option>
            {/* {renderOptionProvince()} */}
          </select>
        }
      </div>
    </div>
    <div className="row">
      <div className="form-group col-12">
        {
          <select defaultValue={-1} name="district" id="district" className="form-control form-control-sm cursor border-radius-45">
            <option value={-1}>Chọn Quận/Huyện</option>
            {/* {renderOptionDistrict()} */}
          </select>
        }
      </div>
    </div>
  </>
}