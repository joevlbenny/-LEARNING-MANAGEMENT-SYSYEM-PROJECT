import React from 'react'

function TeacherLogout() {
  localStorage.removeItem('teacherLoginStatus');
  localStorage.removeItem('teacherToken');
  window.location.href = '/';
    return (
        <div>


        </div>
    )
}

export default TeacherLogout
