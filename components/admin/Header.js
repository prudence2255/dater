import React from 'react';
import Link from 'next/link';
import {UserIcon, BarsIcon} from 'components/Icons';
import * as imports from 'components/Imports';

export default function Header({show, toggleShow, target}) {

    

    return (
        <div className="admin-header-container bg-light w3-card-2">
        <div className="admin-header container">
          <nav>
              <ul className="dater-list">
              <li className={`dater-list-item sidebar-toggle`}>
                  <button onClick={() => toggleShow('toggle-sidebar')}>
                      <BarsIcon />
                  </button>
              </li>
                  <li className="dater-list-item">
                      <Link href="/">
                          <a>
                          Home
                          </a>
                      </Link>
                  </li>
                  <li className="dater-list-item">
                      <Link href="/admin">
                          <a>
                          Dashboard
                          </a>
                      </Link>
                  </li>
                  <li className="dater-list-item profile-dropdown">
                    <button onClick={() => toggleShow('user-toggle')}><UserIcon /></button>
                    <ul className={`w3-card-4 ${show && target === 'user-toggle' ? 'show-profile-dropdown': '' }`}>
                        <li className="dater-list-item">
                        <div>
                        <Link href="/admin-profile">
                                <a>
                                Profile
                                </a>
                            </Link>
                        </div>

                        </li>
                        <li className="dater-list-item">
                        <div>
                        <button>
                                Logout
                        </button>
                        </div>
                        </li>
                    </ul>
                  </li>
              </ul>
          </nav>  
        </div>
        </div>
    )
}
