import {add} from './MathUtils';


describe("Add function",()=>{

    it("add two positive number",()=>{
        expect(add(1,2)).toBe(3);
    });
    tests('Add two negative number', ()=>{
        expect(add(-1,-2)).toBe(-5)
    })
})

import React, { useRef, useEffect, useState } from 'react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);


  const dropdownRef = useRef<HTMLDivElement>(null);


  useEffect(()=>{
    function handleCLickOutside(event.MouseEvent){
        if(dropdownRef.current && !dropdownRef.current.contains(event.target as node)){
            setIsOpen(false);
        }
    }
    document.addEventListener('mouseDown', handleCLickOutside);
    return ()=>{
        document.removeEventListener('mousedown', handleCLickOutside)
    }
  })
  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)}>
        Toggle Dropdown
      </button>
      {isOpen && (
        <div className="dropdown">
          <p>Dropdown Content</p>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
