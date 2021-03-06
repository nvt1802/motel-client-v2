import React, { useEffect } from 'react'
import '../../assets/style/search.css'
import SearchBasic from './searchBasic'
import SearchAdvance from './searchAdvance'

export default function Search({ province, fetchDistrict }) {

  useEffect(() => {

  }, [])

  return (<div id="bg-search">
    <div id="menu-search">
      <form id="form-search" method="get" action="/">
        <div id="accordion" className="w-100">
          <div className="card w-100 shadow p-3" style={{ borderRadius: '15px' }}>
            <SearchBasic province={province} fetchDistrict={fetchDistrict} />
            <div id="accordianId" role="tablist" aria-multiselectable="true">
              <SearchAdvance />
              <center className="mt-3 mb-3">
                <button className="btn btn-sm my-btn-primary w-100" disabled>Tìm kiếm</button>
              </center>
              <a id="optionAdvance" data-toggle="collapse" data-parent="#accordianId" href="#sectionContentId" style={{ fontWeight: 'normal', fontSize: '12px', float: 'right' }} aria-expanded="true" aria-controls="sectionContentId">
                { } ∇
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}