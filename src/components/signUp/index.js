import React, { useEffect } from 'react'
import Services from '../../services'
import { REGEX_DATE, REGEX_PHONE, REGEX_EMAIL } from '../../common/ValidateCommon'
import '../../assets/style/sign-up.css'
import { MESSENGER_ERROR } from '../../common/Constant'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SignUp({
  handleSubmit,
  onSubmit,
  register,
  errors,
  showAlert,
  setShowAlert,
  severity,
  messages,
  getValues,
  province,
  district,
  handleChangeProvince
}) {
  const renderOptionProvince = () => {
    var elements = province?.data?.map((value) => {
      return <option value={value.province_id} key={value.province_id}>{value.province_name}</option>
    })
    return elements
  }

  const renderOptionDistrict = () => {
    var elements = district?.data?.map((value) => {
      return <option value={value.district_id} key={value.district_id}>{value.district_name}</option>
    })
    return elements
  }

  const addEventTagInput = () => {
    let list = document.getElementsByTagName('input')
    for (let i = 0; i < list.length; i++) {
      list[i].addEventListener('focus', (e) => {
        e.target.style.borderColor = "#888"
        let listNode = e.target.parentNode.childNodes
        for (let j = 0; j < listNode.length; j++) {
          if (listNode[j].tagName === 'LABEL') {
            listNode[j].style.top = "-10px"
            listNode[j].style.color = "#666"
            listNode[j].style.fontSize = "12px"
            listNode[j].style.fontStyle = "italic"
          }
        }
      })
      list[i].addEventListener('focusout', (e) => {
        e.target.style.borderColor = "#ddd"
        if (e.target.value === '') {
          let listNode = e.target.parentNode.childNodes
          for (let j = 0; j < listNode.length; j++) {
            if (listNode[j].tagName === 'LABEL') {
              listNode[j].style.top = "10%"
              listNode[j].style.color = "inherit"
              listNode[j].style.fontSize = "inherit"
              listNode[j].style.fontStyle = "normal"
            }
          }
        }
      })
    }

    document.getElementsByClassName("show-password-icon")[0].addEventListener('click', (e) => {
      let node = e.target.parentNode.childNodes[0]
      let rePassword = document.getElementById("rePassword")
      if (node.type === 'password') {
        node.type = "text"
        rePassword.type = "text"
        e.target.classList.remove('fa-eye-slash')
        e.target.classList.add('fa-eye')
      } else {
        node.type = "password"
        rePassword.type = "password"
        e.target.classList.add('fa-eye-slash')
        e.target.classList.remove('fa-eye')
      }
    })

    let birthDateElement = document.getElementById('birthday')

    birthDateElement.addEventListener('focusin', e => {
      e.target.type = 'date'
    })

    birthDateElement.addEventListener('focusout', e => {
      if (e.target.value === '') {
        e.target.type = 'text'
      }
    })

  }

  useEffect(() => {
    addEventTagInput()
    document.title = 'SignUp'
  }, [])

  const handleClose = () => {
    setShowAlert(false)
  };

  return (<>
    <div className="pt-5 pb-5">
      <div className="container my-sign-up-form">
        <div>
          <Snackbar open={showAlert} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}>
            <Alert onClose={handleClose} severity={severity}>{messages}</Alert>
          </Snackbar>
          <div className="alert alert-light text-center text-success font-weight-bold m-0" role="alert">????ng k?? t??i kho???n</div>
        </div>
        <form action="/SignUp" onSubmit={handleSubmit(async (values) => await onSubmit(values))} method="POST">
          <div className="row">
            <div className="form-bounded col-sm-12 col-md-6 pl-0">
              <input ref={register({
                required: MESSENGER_ERROR.username_required,
                validate: async value => await Services.account.checkUserNameExist(value).then(res => { return res.data }) || MESSENGER_ERROR.username_exist
              })} type="text" name="username" id="username" className="form-control" style={{ borderColor: 'rgb(221, 221, 221)' }} autoComplete="off" />
              <label htmlFor="username" style={{ top: '10%', color: 'inherit', fontSize: 'inherit', fontStyle: 'normal' }}>
                T??n t??i kho???n <span className="text-danger">*</span>
              </label>
              <span className="visible error-message">{errors.username && errors.username.message}</span>
            </div>
            <div className="form-bounded col-sm-12 col-md-6 px-0">
              <input ref={register({
                required: MESSENGER_ERROR.email_required,
                pattern: {
                  value: REGEX_EMAIL,
                  message: MESSENGER_ERROR.email_valid
                }
              })} type="email" name="email" id="email" className="form-control" style={{ borderColor: 'rgb(221, 221, 221)' }} autoComplete="off" />
              <label htmlFor="email" style={{ top: '10%', color: 'inherit', fontSize: 'inherit', fontStyle: 'normal' }}>
                Email<span className="text-danger visible">*</span>
              </label>
              <span className="visible error-message">{errors.email && errors.email.message}</span>
            </div>
          </div>
          <div className="row">
            <div className="form-bounded col-sm-12 col-md-6 pl-0">
              <input ref={register({
                required: MESSENGER_ERROR.password_required
              })} type="password" name="password" id="password" className="form-control" style={{ borderColor: 'rgb(221, 221, 221)' }} autoComplete="off" />
              <label htmlFor="password" style={{ top: '10%', color: 'inherit', fontSize: 'inherit', fontStyle: 'normal' }}>
                M???t kh???u <span className="text-danger visible">*</span>
              </label>
              <i className="fa fa-eye-slash show-password-icon" />
              <span className="visible error-message">{errors.password && errors.password.message}</span>
            </div>
            <div className="form-bounded col-sm-12 col-md-6 px-0">
              <input ref={register({
                required: MESSENGER_ERROR.password_required,
                validate: value => (value !== getValues('password') ? false : true) || MESSENGER_ERROR.password_confirm
              })} type="password" name="rePassword" id="rePassword" className="form-control" style={{ borderColor: 'rgb(221, 221, 221)' }} autoComplete="off" />
              <label htmlFor="rePassword" style={{ top: '10%', color: 'inherit', fontSize: 'inherit', fontStyle: 'normal' }}>
                X??c nh???n m???t kh???u <span className="text-danger visible">*</span>
              </label>
              <span className="visible error-message">{errors.rePassword && errors.rePassword.message}</span>
            </div>
          </div>
          <div className="row">
            <div className="form-bounded col-sm-12 col-md-6 pl-0">
              <input ref={register({
                required: MESSENGER_ERROR.name_required
              })} type="text" name="name" id="name" className="form-control" style={{ borderColor: 'rgb(221, 221, 221)' }} autoComplete="off" />
              <label htmlFor="name" style={{ top: '10%', color: 'inherit', fontSize: 'inherit', fontStyle: 'normal' }}>
                H??? t??n <span className="text-danger visible">*</span>
              </label>
              <span className="visible error-message">{errors.name && errors.name.message}</span>
            </div>
            <div className="form-bounded col-sm-12 col-md-6 px-0">
              <input ref={register({
                required: MESSENGER_ERROR.birthday_required,
                pattern: {
                  value: REGEX_DATE,
                  message: MESSENGER_ERROR.birthday_valid
                }
              })} type="text" name="birthday" id="birthday" className="datepicker form-control" style={{ borderColor: 'rgb(221, 221, 221)' }} autoComplete="off" />
              <label htmlFor="birthday" style={{ top: '10%', color: 'inherit', fontSize: 'inherit', fontStyle: 'normal' }}>
                Ng??y sinh <span className="text-danger visible">*</span>
              </label>
              <span className="visible error-message">{errors.birthday && errors.birthday.message}</span>
            </div>
          </div>
          <div className="row">
            <div className="form-bounded col-sm-12 col-md-6 pl-0">
              <input ref={register({
                required: MESSENGER_ERROR.phone_required,
                pattern: {
                  value: REGEX_PHONE,
                  message: MESSENGER_ERROR.phone_valid
                }
              })} type="text" name="phone" id="phone" className="form-control" style={{ borderColor: 'rgb(221, 221, 221)' }} />
              <label htmlFor="phone" style={{ top: '10%', color: 'inherit', fontSize: 'inherit', fontStyle: 'normal' }}>
                S??? ??i???n tho???i <span className="text-danger visible">*</span>
              </label>
              <span className="visible error-message">{errors.phone && errors.phone.message}</span>
            </div>
            <div className="form-bounded col-sm-12 col-md-6 px-0">
              <select ref={register({
                required: MESSENGER_ERROR.gender_required,
                validate: value => (parseInt(value) === -1 ? false : true) || MESSENGER_ERROR.gender_required
              })} className="form-control cursor" id="gender" name="gender" style={{ borderColor: 'rgb(221, 221, 221)' }}>
                <option value={-1}>N/A</option>
                <option value={1}>Nam</option>
                <option value={2}>N???</option>
              </select>
              <label htmlFor="gender" style={{ top: '-10px', color: 'rgb(102, 102, 102)', fontSize: '12px', fontStyle: 'italic' }}>
                Gi???i t??nh <span className="text-danger">*</span>
              </label>
              <span className="visible error-message">{errors.gender && errors.gender.message}</span>
            </div>
          </div>
          <div className="row">
            <div className="form-bounded col-sm-12 col-md-6 pl-0">
              <select ref={register({
                required: MESSENGER_ERROR.province_required,
                validate: value => (parseInt(value) === -1 ? false : true) || MESSENGER_ERROR.province_required
              })} onChange={handleChangeProvince}
                className="form-control cursor" id="provinceSignUp" name="province" style={{ borderColor: 'rgb(221, 221, 221)' }}>
                <option value={-1}>T???nh/Th??nh ph???</option>
                {renderOptionProvince()}
              </select>
              <label htmlFor="provinceSignUp" style={{ top: '-10px', color: 'rgb(102, 102, 102)', fontSize: '12px', fontStyle: 'italic' }}>
                Ch???n T???nh/Th??nh ph??? <span className="text-danger">*</span>
              </label>
              <span className="visible error-message">{errors.province && errors.province.message}</span>
            </div>
            <div className="form-bounded col-sm-12 col-md-6 px-0">
              <select ref={register({
                required: MESSENGER_ERROR.district_required,
                validate: value => (parseInt(value) === -1 ? false : true) || MESSENGER_ERROR.district_required
              })} className="form-control cursor" id="districtSignUp" name="district" style={{ borderColor: 'rgb(221, 221, 221)' }}>
                <option value={-1}> Qu???n/Huy???n</option>
                {renderOptionDistrict()}
              </select>
              <label htmlFor="districtSignUp" style={{ top: '-10px', color: 'rgb(102, 102, 102)', fontSize: '12px', fontStyle: 'italic' }}>
                Ch???n Qu???n/Huy???n<span className="text-danger">*</span>
              </label>
              <span className="visible error-message">{errors.district && errors.district.message}</span>
            </div>
          </div>
          <div className="row d-flex justify-content-between mt-3">
            <div className="w-50 text-left">
              <a href="/" id="closeSignUpModal" className="btn btn-sm my-btn-default" style={{ width: '105px' }} data-toggle="modal" data-target="#loginModal">????ng nh???p</a>
            </div>
            <div className="w-50 text-right">
              <button id="signUp" type="submit" className="btn btn-sm my-btn-primary" style={{ width: '125px' }} >????ng k??</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </>
  )
}