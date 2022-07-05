import { useState } from 'react'
import { Sidebar, Navbar, Dropdown, Avatar } from 'flowbite-react'
import {
  AiOutlineHome,
  AiOutlinePlus,
  AiOutlineEdit,
  AiOutlineFundView,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from 'react-icons/ai'

export default function Layout({ SidebarItems, Content }) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  function changeCollapsed() {
    setIsCollapsed(!isCollapsed)
  }

  function ToggleIcon() {
    if (!isCollapsed)
      return (
        <AiOutlineMenuFold
          className="ml-5 hover:cursor-pointer"
          onClick={changeCollapsed}
        />
      )
    else
      return (
        <AiOutlineMenuUnfold
          className="ml-5 hover:cursor-pointer"
          onClick={changeCollapsed}
        />
      )
  }

  return (
    <div className="bg-gray-50 flex flex-col min-h-screen">
      {/* Navbar Area */}
      <Navbar fluid={true}>
        <Navbar.Brand>
          <img src="logo.png" className="mr-3 h-9" alt="UIC Logo" />
          <span
            hidden={isCollapsed}
            className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
          >
            <span className="text-green-500">Degree</span>OverView
          </span>
          <ToggleIcon />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {/* <Navbar.Link href="/navbars" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">About</Navbar.Link>
          <Navbar.Link href="/navbars">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>*/}
        </Navbar.Collapse>
      </Navbar>
      {/* Sidebar Area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div>
          <Sidebar collapsed={isCollapsed} aria-label="DegreeOverview Sidebar">
            <Sidebar.Items className="min-h-screen">
              <Sidebar.ItemGroup className="min-h-screen">
                <Sidebar.Item href="#" icon={AiOutlineHome}>
                  Home
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={AiOutlinePlus}>
                  Create a New Course
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={AiOutlineEdit}>
                  Modify a Course
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={AiOutlineFundView}>
                  View Dependencies
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </div>
        {/* content */}
        <div className="grow">
          <Content></Content>
        </div>
      </div>
    </div>
  )
}
