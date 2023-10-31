import React from "react";
import { Link } from "react-router-dom";

const DashboardIndex = () => {
  return (
    <>
      <li>
        <Link
          class="headerarea__has__dropdown"
          to="dashboard/instructor-dashboard.html"
        >
          Dashboard
          <i class="icofont-rounded-down"></i>
        </Link>
        <ul class="headerarea__submenu headerarea__submenu--third--wrap">
          <li>
            <Link to="https://html.themewin.com/edurock-preview/admin-dashboard.html">
              Admin <i class="icofont-rounded-right"></i>
            </Link>
            <ul class="headerarea__submenu--third">
              <li>
                <Link to="dashboard/admin-dashboard.html">Admin Dashboard</Link>
              </li>
              <li>
                <Link to="dashboard/admin-profile.html">Admin Profile</Link>
              </li>
              <li>
                <Link to="dashboard/admin-message.html">Message</Link>
              </li>
              <li>
                <Link to="dashboard/admin-course.html">Courses</Link>
              </li>
              <li>
                <Link to="dashboard/admin-reviews.html">Review</Link>
              </li>
              <li>
                <Link to="dashboard/admin-quiz-attempts.html">Admin Quiz</Link>
              </li>
              <li>
                <Link to="dashboard/admin-settings.html">Settings</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="dashboard/instructor-dashboard.html">
              Instructor <i class="icofont-rounded-right"></i>
            </Link>
            <ul class="headerarea__submenu--third">
              <li>
                <Link to="dashboard/instructor-dashboard.html">
                  Inst. Dashboard
                </Link>
              </li>
              <li>
                <Link to="dashboard/instructor-profile.html">
                  Inst. Profile
                </Link>
              </li>
              <li>
                <Link to="dashboard/instructor-message.html">Message</Link>
              </li>
              <li>
                <Link to="dashboard/instructor-wishlist.html">Wishlist</Link>
              </li>
              <li>
                <Link to="dashboard/instructor-reviews.html">Review</Link>
              </li>
              <li>
                <Link to="dashboard/instructor-my-quiz-attempts.html">
                  My Quiz
                </Link>
              </li>
              <li>
                <Link to="dashboard/instructor-order-history.html">
                  Order History
                </Link>
              </li>
              <li>
                <Link to="dashboard/instructor-course.html">My Courses</Link>
              </li>
              <li>
                <Link to="dashboard/instructor-announcments.html">
                  Announcements
                </Link>
              </li>
              <li>
                <Link to="dashboard/instructor-quiz-attempts.html">
                  Quiz Attempts
                </Link>
              </li>
              <li>
                <Link to="dashboard/instructor-assignments.html">
                  Assignment
                </Link>
              </li>
              <li>
                <Link to="dashboard/instructor-settings.html">Settings</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="dashboard/student-dashboard.html">
              Student <i class="icofont-rounded-right"></i>
            </Link>
            <ul class="headerarea__submenu--third">
              <li>
                <Link to="dashboard/student-dashboard.html">Dashboard</Link>
              </li>
              <li>
                <Link to="dashboard/student-profile.html">Profile</Link>
              </li>
              <li>
                <Link to="dashboard/student-message.html">Message</Link>
              </li>
              <li>
                <Link to="dashboard/student-enrolled-courses.html">
                  Enrolled Courses
                </Link>
              </li>
              <li>
                <Link to="dashboard/student-wishlist.html">Wishlist</Link>
              </li>
              <li>
                <Link to="dashboard/student-reviews.html">Review</Link>
              </li>
              <li>
                <Link to="dashboard/student-my-quiz-attempts.html">
                  My Quiz
                </Link>
              </li>
              <li>
                <Link to="dashboard/student-assignments.html">Assignment</Link>
              </li>
              <li>
                <Link to="dashboard/student-settings.html">Settings</Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </>
  );
};

export default DashboardIndex;
