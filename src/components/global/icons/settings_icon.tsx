import React from 'react'
import { IconInterface } from './interfaces'

export const settingsIcon = ({ color }: IconInterface): JSX.Element => <svg
  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M16.9167 12.8333C17 12.6667 17.1667 12.5 17.5 12.5C18.9167 12.5 20 11.4167 20 10C20 8.58333 18.9167 7.5 17.5 7.5H17.3333C17.1667 7.5 17 7.41667 16.9167 7.25C16.9167 7.16667 16.9167 7.16667 16.8333 7.08333C16.75 6.91667 16.75 6.66667 17 6.41667C18 5.41667 18 3.83333 17 2.91667C16.5 2.41667 15.9167 2.16667 15.25 2.16667C14.5833 2.16667 13.9167 2.41667 13.4167 2.91667C13.25 3.08333 13 3.08333 12.8333 3C12.6667 3 12.5 2.75 12.5 2.5C12.5 1.08333 11.4167 0 10 0C8.58333 0 7.5 1.08333 7.5 2.5V2.66667C7.5 2.83333 7.41667 3 7.25 3.08333C7.21459 3.08333 7.19422 3.08333 7.17612 3.08973C7.15162 3.09838 7.13125 3.11875 7.08333 3.16667C6.91667 3.25 6.66667 3.16667 6.41667 3C5.41667 2 3.83333 2 2.91667 3C1.91667 4 1.91667 5.58333 3 6.58333C3.16667 6.75 3.16667 7 3.08333 7.25C3 7.41667 2.75 7.58333 2.5 7.58333C1.08333 7.58333 0 8.66667 0 10.0833C0 11.5 1.08333 12.5833 2.5 12.5833H2.66667C2.91667 12.5833 3.08333 12.75 3.16667 12.9167C3.25 13.0833 3.25 13.3333 3 13.5833C2.5 14.0833 2.25 14.6667 2.25 15.3333C2.25 16 2.5 16.5833 3 17.0833C4 18.0833 5.58333 18.0833 6.58333 17C6.75 16.8333 7 16.8333 7.25 16.9167C7.5 17 7.58333 17.1667 7.58333 17.5C7.58333 18.9167 8.66667 20 10.0833 20C11.5 20 12.5833 18.9167 12.5833 17.5V17.3333C12.5833 17.0833 12.75 16.9167 12.9167 16.8333C13.0833 16.75 13.3333 16.75 13.5833 17C14.5833 18 16.1667 18 17.0833 17C18.0833 16 18.0833 14.4167 17 13.4167C16.9167 13.25 16.8333 13 16.9167 12.8333ZM6.66667 10C6.66667 8.16667 8.16667 6.66667 10 6.66667C11.8333 6.66667 13.3333 8.16667 13.3333 10C13.3333 11.8333 11.8333 13.3333 10 13.3333C8.16667 13.3333 6.66667 11.8333 6.66667 10ZM8.33333 10C8.33333 10.9167 9.08333 11.6667 10 11.6667C10.9167 11.6667 11.6667 10.9167 11.6667 10C11.6667 9.08333 10.9167 8.33333 10 8.33333C9.08333 8.33333 8.33333 9.08333 8.33333 10ZM15.9167 14.6667C15.25 13.9167 15.0833 13 15.4167 12.1667C15.75 11.3333 16.5833 10.8333 17.4167 10.8333C18 10.8333 18.3333 10.5 18.3333 10C18.3333 9.5 18 9.16667 17.5 9.16667H17.3333C16.5 9.16667 15.6667 8.66667 15.3333 7.83333C15.25 7.75 15.25 7.66667 15.25 7.58333C15 6.83333 15.1667 5.91667 15.75 5.33333C16.1667 4.91667 16.1667 4.41667 15.8333 4.08333C15.6667 3.91667 15.5 3.83333 15.25 3.83333C15 3.83333 14.8333 3.91667 14.6667 4.08333C13.9167 4.75 13 4.91667 12.1667 4.58333C11.3333 4.25 10.8333 3.5 10.8333 2.58333C10.8333 2 10.5 1.66667 10 1.66667C9.5 1.66667 9.16667 2 9.16667 2.5V2.66667C9.16667 3.5 8.66667 4.33333 7.83333 4.66667C7.75 4.75 7.66667 4.75 7.58333 4.75C6.83333 5 5.91667 4.83333 5.33333 4.25C4.91667 3.83333 4.41667 3.83333 4.08333 4.16667C3.75 4.5 3.75 5 4.08333 5.33333C4.75 6.08333 4.91667 7 4.58333 7.83333C4.25 8.66667 3.5 9.25 2.58333 9.25H2.5C2 9.25 1.66667 9.58333 1.66667 10.0833C1.66667 10.5833 2 10.9167 2.5 10.9167H2.66667C3.5 10.9167 4.33333 11.4167 4.66667 12.25C5.08333 13.0833 4.91667 14 4.25 14.6667C4 14.9167 3.91667 15.0833 3.91667 15.3333C3.91667 15.5833 4 15.75 4.16667 15.9167C4.5 16.25 5 16.25 5.33333 15.9167C5.75 15.5 6.33333 15.25 6.91667 15.25C7.25 15.25 7.58333 15.25 7.83333 15.4167C8.66667 15.75 9.25 16.5 9.25 17.4167V17.5C9.25 18 9.58333 18.3333 10.0833 18.3333C10.5833 18.3333 10.9167 18 10.9167 17.5V17.3333C10.9167 16.5 11.4167 15.6667 12.25 15.3333C13.0833 14.9167 14 15.0833 14.6667 15.75C14.9167 16 15.0833 16.0833 15.3333 16.0833C15.5833 16.0833 15.75 16 15.9167 15.8333C16.0833 15.6667 16.1667 15.5 16.1667 15.25C16.1667 15 16.0833 14.8333 15.9167 14.6667Z"
    fill={color}/>
</svg>

export const settingsIconLarge = ({ color }: IconInterface): JSX.Element => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M20.3 15.4C20.4 15.2 20.6 15 21 15C22.7 15 24 13.7 24 12C24 10.3 22.7 9 21 9H20.8C20.6 9 20.4 8.9 20.3 8.7C20.3 8.6 20.3 8.6 20.2 8.5C20.1 8.3 20.1 8 20.4 7.7C21.6 6.5 21.6 4.6 20.4 3.5C19.8 2.9 19.1 2.6 18.3 2.6C17.5 2.6 16.7 2.9 16.1 3.5C15.9 3.7 15.6 3.7 15.4 3.6C15.2 3.6 15 3.3 15 3C15 1.3 13.7 0 12 0C10.3 0 9 1.3 9 3V3.2C9 3.4 8.9 3.6 8.7 3.7C8.6575 3.7 8.63307 3.7 8.61134 3.70767C8.58194 3.71806 8.5575 3.7425 8.5 3.8C8.3 3.9 8 3.8 7.7 3.6C6.5 2.4 4.6 2.4 3.5 3.6C2.3 4.8 2.3 6.7 3.6 7.9C3.8 8.1 3.8 8.4 3.7 8.7C3.6 8.9 3.3 9.1 3 9.1C1.3 9.1 0 10.4 0 12.1C0 13.8 1.3 15.1 3 15.1H3.2C3.5 15.1 3.7 15.3 3.8 15.5C3.9 15.7 3.9 16 3.6 16.3C3 16.9 2.7 17.6 2.7 18.4C2.7 19.2 3 19.9 3.6 20.5C4.8 21.7 6.7 21.7 7.9 20.4C8.1 20.2 8.4 20.2 8.7 20.3C9 20.4 9.1 20.6 9.1 21C9.1 22.7 10.4 24 12.1 24C13.8 24 15.1 22.7 15.1 21V20.8C15.1 20.5 15.3 20.3 15.5 20.2C15.7 20.1 16 20.1 16.3 20.4C17.5 21.6 19.4 21.6 20.5 20.4C21.7 19.2 21.7 17.3 20.4 16.1C20.3 15.9 20.2 15.6 20.3 15.4ZM8 12C8 9.8 9.8 8 12 8C14.2 8 16 9.8 16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12ZM10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12ZM19.1 17.6C18.3 16.7 18.1 15.6 18.5 14.6C18.9 13.6 19.9 13 20.9 13C21.6 13 22 12.6 22 12C22 11.4 21.6 11 21 11H20.8C19.8 11 18.8 10.4 18.4 9.4C18.3 9.3 18.3 9.2 18.3 9.1C18 8.2 18.2 7.1 18.9 6.4C19.4 5.9 19.4 5.3 19 4.9C18.8 4.7 18.6 4.6 18.3 4.6C18 4.6 17.8 4.7 17.6 4.9C16.7 5.7 15.6 5.9 14.6 5.5C13.6 5.1 13 4.2 13 3.1C13 2.4 12.6 2 12 2C11.4 2 11 2.4 11 3V3.2C11 4.2 10.4 5.2 9.4 5.6C9.3 5.7 9.2 5.7 9.1 5.7C8.2 6 7.1 5.8 6.4 5.1C5.9 4.6 5.3 4.6 4.9 5C4.5 5.4 4.5 6 4.9 6.4C5.7 7.3 5.9 8.4 5.5 9.4C5.1 10.4 4.2 11.1 3.1 11.1H3C2.4 11.1 2 11.5 2 12.1C2 12.7 2.4 13.1 3 13.1H3.2C4.2 13.1 5.2 13.7 5.6 14.7C6.1 15.7 5.9 16.8 5.1 17.6C4.8 17.9 4.7 18.1 4.7 18.4C4.7 18.7 4.8 18.9 5 19.1C5.4 19.5 6 19.5 6.4 19.1C6.9 18.6 7.6 18.3 8.3 18.3C8.7 18.3 9.1 18.3 9.4 18.5C10.4 18.9 11.1 19.8 11.1 20.9V21C11.1 21.6 11.5 22 12.1 22C12.7 22 13.1 21.6 13.1 21V20.8C13.1 19.8 13.7 18.8 14.7 18.4C15.7 17.9 16.8 18.1 17.6 18.9C17.9 19.2 18.1 19.3 18.4 19.3C18.7 19.3 18.9 19.2 19.1 19C19.3 18.8 19.4 18.6 19.4 18.3C19.4 18 19.3 17.8 19.1 17.6Z" fill={color}/>
</svg>

