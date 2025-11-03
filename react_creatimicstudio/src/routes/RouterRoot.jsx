import React, { useEffect, useRef, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AuthenticatedLayout from "../components/AuthenticatedLayout";
import Dashboard from "../adminPages/system/Dashboard";
import ScheduleMonth from "../adminPages/schedule/Schedule_teach_month.jsx";
import Lookup from "../adminPages/schedule/Lookup.jsx";
import ScheduleExamMonth from "../adminPages/schedule/Schedule_exam_month.jsx";
import TimetableClass from "../adminPages/schedule/Timetable_class.jsx";
import Timetable from "../adminPages/schedule/Timetable.jsx";
import Lesson from "../adminPages/schedule/Lesson.jsx";
import ScheduleDay from "../adminPages/schedule/Schedule_day.jsx";
import FinalExam from "../adminPages/grades/FinalExam.jsx";
import GraduationExam from "../adminPages/grades/GraduationExam.jsx";
import LookUpFinalExam from "../adminPages/grades/LookupFinalExam.jsx";
import LookUpGraduationExam from "../adminPages/grades/LookupGraduationExam.jsx";
import PrintTranscript from "../adminPages/grades/PrintTranscript.jsx";
import LearningResults from "../adminPages/result/LearningResults.jsx";
import Notification from "../adminPages/notification/Notification.jsx";
import ChangePassStudent from "../adminPages/system/ChangePassStudent.jsx";
import ChangePassTC from "../adminPages/system/ChangePassTC.jsx";
import Account from "../adminPages/system/Account.jsx";
import Login from "../adminPages/auth/Login.jsx";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);

  // if (!isAuthenticated) {
  //   return <Navigate to="/login" replace />;
  // }

  return children;
};

function RouterRoot() {
  return (
    <Router>
      <Routes>
        {/* public route */}
        <Route path="/login" element={<Login />} />

        {/* private route */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AuthenticatedLayout />
            </ProtectedRoute>
          }
        >
          {/* route system */}
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="change-pass-student" element={<ChangePassStudent />} />
          <Route path="change-pass-tc" element={<ChangePassTC />} />
          <Route path="account" element={<Account />} />


          {/* route schedule */}
          <Route path="scheduleMonth" element={<ScheduleMonth />} />
          <Route path="lookup" element={<Lookup />} />
          <Route path="schedule-exam-month" element={<ScheduleExamMonth />} />
          <Route path="timetable-class" element={<TimetableClass />} />
          <Route path="timetable" element={<Timetable />} />
          <Route path="lesson" element={<Lesson />} />
          <Route path="schedule-day" element={<ScheduleDay />} />

          {/* route grades */}
          <Route path="final-exam" element={<FinalExam />} />
          <Route path="graduation-exam" element={<GraduationExam />} />
          <Route path="look-up-final-exam" element={<LookUpFinalExam />} />
          <Route path="look-up-graduation-exam" element={<LookUpGraduationExam />} />
          <Route path="print-transcript" element={<PrintTranscript />} />

          {/* route result */}
          <Route path="learning-results" element={<LearningResults />} />

          {/* Notification */}
          <Route path="notification" element={<Notification />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default RouterRoot;
