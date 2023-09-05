import Button from 'UI/Button';
import Container from 'UI/Container';
import Collapsible from 'app/components/Collapse';
import Header from 'app/components/Header';
import Sidebar from 'app/components/Sidebar';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Messages({ mode }) {
  const navigate = useNavigate();

  const collapseItem = [
    {
      name: "Jizzax Suv ta'minoti",
      action: <i className="fa-solid fa-trash-can"></i>,
      text: 'Lorem ipsum dolor sit amet consectetur. Iaculis blandit metus vestibulum urna vitae egestas et. Amet adipiscing sit sit ultricies commodo in pulvinar nisl. Nibh pulvinar volutpat gravida venenatis. Porttitor aliquet lobortis ullamcorper aliquam. Cursus faucibus tincidunt feugiat sagittis nulla amet porttitor. Elit platea proin lobortis etiam ullamcorper rutrum quam nec. Tortor.',
    },
    {
      name: "Jizzax Suv ta'minoti",
      action: <i className="fa-solid fa-trash-can"></i>,
      text: 'Lorem ipsum dolor sit amet consectetur. Iaculis blandit metus vestibulum urna vitae egestas et. Amet adipiscing sit sit ultricies commodo in pulvinar nisl. Nibh pulvinar volutpat gravida venenatis. Porttitor aliquet lobortis ullamcorper aliquam. Cursus faucibus tincidunt feugiat sagittis nulla amet porttitor. Elit platea proin lobortis etiam ullamcorper rutrum quam nec. Tortor.',
    },
    {
      name: "Jizzax Suv ta'minoti",
      action: <i className="fa-solid fa-trash-can"></i>,
      text: 'Lorem ipsum dolor sit amet consectetur. Iaculis blandit metus vestibulum urna vitae egestas et. Amet adipiscing sit sit ultricies commodo in pulvinar nisl. Nibh pulvinar volutpat gravida venenatis. Porttitor aliquet lobortis ullamcorper aliquam. Cursus faucibus tincidunt feugiat sagittis nulla amet porttitor. Elit platea proin lobortis etiam ullamcorper rutrum quam nec. Tortor.',
    },
    {
      name: "Jizzax Suv ta'minoti",
      action: <i className="fa-solid fa-trash-can"></i>,
      text: 'Lorem ipsum dolor sit amet consectetur. Iaculis blandit metus vestibulum urna vitae egestas et. Amet adipiscing sit sit ultricies commodo in pulvinar nisl. Nibh pulvinar volutpat gravida venenatis. Porttitor aliquet lobortis ullamcorper aliquam. Cursus faucibus tincidunt feugiat sagittis nulla amet porttitor. Elit platea proin lobortis etiam ullamcorper rutrum quam nec. Tortor.',
    },
    {
      name: "Jizzax Suv ta'minoti",
      action: <i className="fa-solid fa-trash-can"></i>,
      text: 'Lorem ipsum dolor sit amet consectetur. Iaculis blandit metus vestibulum urna vitae egestas et. Amet adipiscing sit sit ultricies commodo in pulvinar nisl. Nibh pulvinar volutpat gravida venenatis. Porttitor aliquet lobortis ullamcorper aliquam. Cursus faucibus tincidunt feugiat sagittis nulla amet porttitor. Elit platea proin lobortis etiam ullamcorper rutrum quam nec. Tortor.',
    },
    {
      name: "Jizzax Suv ta'minoti",
      action: <i className="fa-solid fa-trash-can"></i>,
      text: 'Lorem ipsum dolor sit amet consectetur. Iaculis blandit metus vestibulum urna vitae egestas et. Amet adipiscing sit sit ultricies commodo in pulvinar nisl. Nibh pulvinar volutpat gravida venenatis. Porttitor aliquet lobortis ullamcorper aliquam. Cursus faucibus tincidunt feugiat sagittis nulla amet porttitor. Elit platea proin lobortis etiam ullamcorper rutrum quam nec. Tortor.',
    },
    {
      name: "Jizzax Suv ta'minoti",
      action: <i className="fa-solid fa-trash-can"></i>,
      text: 'Lorem ipsum dolor sit amet consectetur. Iaculis blandit metus vestibulum urna vitae egestas et. Amet adipiscing sit sit ultricies commodo in pulvinar nisl. Nibh pulvinar volutpat gravida venenatis. Porttitor aliquet lobortis ullamcorper aliquam. Cursus faucibus tincidunt feugiat sagittis nulla amet porttitor. Elit platea proin lobortis etiam ullamcorper rutrum quam nec. Tortor.',
    },
    {
      name: "Jizzax Suv ta'minoti",
      action: <i className="fa-solid fa-trash-can"></i>,
      text: 'Lorem ipsum dolor sit amet consectetur. Iaculis blandit metus vestibulum urna vitae egestas et. Amet adipiscing sit sit ultricies commodo in pulvinar nisl. Nibh pulvinar volutpat gravida venenatis. Porttitor aliquet lobortis ullamcorper aliquam. Cursus faucibus tincidunt feugiat sagittis nulla amet porttitor. Elit platea proin lobortis etiam ullamcorper rutrum quam nec. Tortor.',
    },
    {
      name: "Jizzax Suv ta'minoti",
      action: <i className="fa-solid fa-trash-can"></i>,
      text: 'Lorem ipsum dolor sit amet consectetur. Iaculis blandit metus vestibulum urna vitae egestas et. Amet adipiscing sit sit ultricies commodo in pulvinar nisl. Nibh pulvinar volutpat gravida venenatis. Porttitor aliquet lobortis ullamcorper aliquam. Cursus faucibus tincidunt feugiat sagittis nulla amet porttitor. Elit platea proin lobortis etiam ullamcorper rutrum quam nec. Tortor.',
    },
    {
      name: "Jizzax Suv ta'minoti",
      action: <i className="fa-solid fa-trash-can"></i>,
      text: 'Lorem ipsum dolor sit amet consectetur. Iaculis blandit metus vestibulum urna vitae egestas et. Amet adipiscing sit sit ultricies commodo in pulvinar nisl. Nibh pulvinar volutpat gravida venenatis. Porttitor aliquet lobortis ullamcorper aliquam. Cursus faucibus tincidunt feugiat sagittis nulla amet porttitor. Elit platea proin lobortis etiam ullamcorper rutrum quam nec. Tortor.',
    },
    {
      name: "Jizzax Suv ta'minoti",
      action: <i className="fa-solid fa-trash-can"></i>,
      text: 'Lorem ipsum dolor sit amet consectetur. Iaculis blandit metus vestibulum urna vitae egestas et. Amet adipiscing sit sit ultricies commodo in pulvinar nisl. Nibh pulvinar volutpat gravida venenatis. Porttitor aliquet lobortis ullamcorper aliquam. Cursus faucibus tincidunt feugiat sagittis nulla amet porttitor. Elit platea proin lobortis etiam ullamcorper rutrum quam nec. Tortor.',
    },
    {
      name: "Jizzax Suv ta'minoti",
      action: <i className="fa-solid fa-trash-can"></i>,
      text: 'Lorem ipsum dolor sit amet consectetur. Iaculis blandit metus vestibulum urna vitae egestas et. Amet adipiscing sit sit ultricies commodo in pulvinar nisl. Nibh pulvinar volutpat gravida venenatis. Porttitor aliquet lobortis ullamcorper aliquam. Cursus faucibus tincidunt feugiat sagittis nulla amet porttitor. Elit platea proin lobortis etiam ullamcorper rutrum quam nec. Tortor.',
    },
  ];

  return (
    <div className={`w-full ${mode ? '' : 'bg-gray-900 p-0'}`}>
      <div className={`mb-[70px] grid gap-5 relative top-[80px]`}>
        <div className="px-5 w-100 relative">
          <div className="flex justify-between items-center mb-5">
            <h3
              className={`text-[32px] font-[600] ${
                mode === true ? 'text-black' : 'text-white'
              }`}
            >
              Xabarlar
            </h3>
            <Button onClick={() => navigate('/messages/send-message')}>
              Xabar yo'llash
            </Button>
          </div>
          <div className="rounded-xl overflow-hidden">
            {collapseItem.map((item, key) => {
              return <Collapsible mode={mode} dataSource={item} key={key} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
