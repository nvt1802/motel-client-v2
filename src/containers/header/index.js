import React from 'react'
import { connect } from 'react-redux'
import Header from '../../components/layout/header'

function HeaderContainer(props) {
    return <Header />
}

const mapStateToProps = state => ({
})


const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)