import React from 'react'

export default function Alert({msg,type}) {
    return (
        <div className='mb-5' style={{ height: '20px' }}>
            <div className={`alert alert-${type}`} role="alert">
                {msg}
            </div>
        </div>
    )
}