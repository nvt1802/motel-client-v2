import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import SignUp from '../../components/signUp'

function SignUpContainer(props) {

  const { handleSubmit, register, errors, reset, getValues } = useForm()
  const [signUpSuccess, setSignUpSuccess] = useState(false)

  const onSubmit = values => {
    // let account = {
    //   "userName": values.username,
    //   "password": values.password,
    //   "role": 2,
    //   "name": values.name,
    //   "gender": parseInt(values.gender),
    //   "birthday": values.birthday,
    //   "phone": values.phone,
    //   "email": values.email,
    //   "provinceId": parseInt(values.province),
    //   "districtId": parseInt(values.district)
    // }
    // AccountAPI.addOneAccount(account).then(value => {
    //   if (value) {
    //     setSignUpSuccess(true)
    //     reset()
    //   } else {
    //     setSignUpSuccess(false)
    //   }
    // }).catch(err => {
    //   setSignUpSuccess(false)
    // })
  }

  const handleChangeProvince = (e) => {
    // DistrictAPI.findDistrictByProvinceId(e.target.value).then(res => {
    //   props.getDistrictByProvinceId(res.data)
    // }).catch(err => { })
  }

  return <SignUp
    handleSubmit={handleSubmit}
    register={register}
    errors={errors}
    getValues={getValues}
    signUpSuccess={signUpSuccess}
    onSubmit={onSubmit}
    location={props.location}
    handleChangeProvince={handleChangeProvince}
  />
}

const mapStateToProps = state => ({
  location: state.location
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer)