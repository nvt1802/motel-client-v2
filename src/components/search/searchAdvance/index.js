import React from 'react'
import FormatNumber from '../../../common/FormatNumber'
import Criteria from './Criteria'

function SearchAdvance({ setPrice, setAcreage, search, criteria, setListCriteriaId }) {

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'price':
        setPrice(parseInt(e.target.value))
        break;
      case 'acreage':
        setAcreage(parseInt(e.target.value))
        break
      default:
        break
    }
  }

  return <>
    <div id="searchAdvance">
      <div id="sectionContentId" className="collapse in" role="tabpanel" aria-labelledby="sectionHeaderId" style={{ paddingTop: '10px' }}>
        <div style={{ borderTop: 'solid 1px #ccc', position: 'relative', marginBottom: '10px' }}>
          <a style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#fff', fontWeight: 'normal', fontSize: '14px' }} data-toggle="collapse" data-parent="#accordianId" href="#sectionContentId">Tùy chọn thêm</a>
        </div>
        <div className="row">
          <div className="form-group col-sm-12 col-md-12">
            <label className="mr-3" style={{ display: 'inline-block' }}>Mức giá tối đa : </label>
            <p style={{ display: 'inline-block', fontSize: '20px', color: '#000' }}>
              <b id="notiprice">{FormatNumber.currencyformatter.format(search?.price)}</b> (VNĐ)
                                            </p>
            <div className="slidecontainer" id="scrollPrice">
              <input onChange={handleChange} type="range" name="price" defaultValue={search?.price} id="priceSlider" min={500000} max={3000000} step={100000} className="slider cursor" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-group col-12">
            <label style={{ display: 'inline-block' }}>Diện tích tối đa : </label>
            <p className="mx-3" style={{ display: 'inline-block', fontSize: '20px', color: '#000' }}>
              <b id="notiarea">{search?.acreage}</b> (m<sup>2</sup>)
            </p>
            <div className="slidecontainer" id="scrollArea">
              <input onChange={handleChange} type="range" name="acreage" defaultValue={search?.acreage} id="areaSlider" min={10} max={50} step={5} className="slider cursor" />
            </div>
          </div>
        </div>
        <label>Các tiêu chí:</label>
        <div style={{ overflowX: 'hidden', height: '120px' }}>
          <div className="row">
            <Criteria criteria={criteria} setListCriteriaId={setListCriteriaId} optionAdvance={search?.optionAdvance} listCriteriaId={new Set(search?.listCriteriaId)} />
          </div>
        </div>
      </div>
    </div>
  </>
}

export default SearchAdvance