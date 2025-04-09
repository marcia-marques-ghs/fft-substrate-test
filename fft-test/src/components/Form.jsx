import { useState } from 'react';
import { Stepper } from '@mantine/core';

function Form () {
  const [active, setActive] = useState(1);

  return (
    <>
    <Stepper active={active} onStepClick={setActive} iconPosition="right">
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
    <div style={{width: 725, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
  <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
    <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
      <div data-svg-wrapper data-radius="xl" data-size="xs" data-state="completed">
      <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.625" width="34" height="34" rx="17" fill="#056734"/>
      <path d="M22.9582 13L15.6248 20.3333L12.2915 17" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </div>
    </div>
    <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
      <div style={{width: 104, textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '600',wordWrap: 'break-word'}}>Set up</div>
    </div>
  </div>
  <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
    <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
      <div data-svg-wrapper data-radius="xl" data-size="xs" data-state="completed">
      <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.875" width="34" height="34" rx="17" fill="#056734"/>
      <path d="M23.2082 13L15.8748 20.3333L12.5415 17" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </div>
    </div>
    <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
      <div style={{width: 104, textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '600',  wordWrap: 'break-word'}}>Components</div>
    </div>
  </div>
  <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
    <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
      <div data-svg-wrapper data-radius="xl" data-size="xs" data-state="active">
      <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.125" y="1" width="32" height="32" rx="16" fill="#F1F3F5"/>
      <rect x="1.125" y="1" width="32" height="32" rx="16" stroke="#056734" stroke-width="2"/>
      <path d="M19.8262 14.8496C19.8262 15.2441 19.7441 15.5859 19.5801 15.875C19.416 16.1641 19.1934 16.4004 18.9121 16.584C18.6348 16.7676 18.3223 16.9023 17.9746 16.9883V17.0234C18.6621 17.1094 19.1836 17.3203 19.5391 17.6562C19.8984 17.9922 20.0781 18.4414 20.0781 19.0039C20.0781 19.5039 19.9551 19.9512 19.709 20.3457C19.4668 20.7402 19.0918 21.0508 18.584 21.2773C18.0762 21.5039 17.4219 21.6172 16.6211 21.6172C16.1484 21.6172 15.707 21.5781 15.2969 21.5C14.8906 21.4258 14.5078 21.3105 14.1484 21.1543V19.6133C14.5156 19.8008 14.9004 19.9434 15.3027 20.041C15.7051 20.1348 16.0801 20.1816 16.4277 20.1816C17.0762 20.1816 17.5293 20.0703 17.7871 19.8477C18.0488 19.6211 18.1797 19.3047 18.1797 18.8984C18.1797 18.6602 18.1191 18.459 17.998 18.2949C17.877 18.1309 17.666 18.0059 17.3652 17.9199C17.0684 17.834 16.6523 17.791 16.1172 17.791H15.4668V16.4023H16.1289C16.6562 16.4023 17.0566 16.3535 17.3301 16.2559C17.6074 16.1543 17.7949 16.0176 17.8926 15.8457C17.9941 15.6699 18.0449 15.4707 18.0449 15.248C18.0449 14.9434 17.9512 14.7051 17.7637 14.5332C17.5762 14.3613 17.2637 14.2754 16.8262 14.2754C16.5527 14.2754 16.3027 14.3105 16.0762 14.3809C15.8535 14.4473 15.6523 14.5293 15.4727 14.627C15.293 14.7207 15.1348 14.8125 14.998 14.9023L14.1602 13.6543C14.4961 13.4121 14.8887 13.2109 15.3379 13.0508C15.791 12.8906 16.3301 12.8105 16.9551 12.8105C17.8379 12.8105 18.5371 12.9883 19.0527 13.3438C19.5684 13.6992 19.8262 14.2012 19.8262 14.8496Z" fill="#495057"/>
      </svg>
      </div>
    </div>
    <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
      <div style={{width: 104, textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '600',  wordWrap: 'break-word'}}>Additives</div>
    </div>
  </div>
  <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
    <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
      <div data-svg-wrapper data-radius="xl" data-size="xs" data-state="inactive">
      <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.375" width="34" height="34" rx="17" fill="#F1F3F5"/>
      <path d="M20.6035 19.7246H19.5723V21.5H17.8027V19.7246H14.1465V18.4648L17.9023 12.9336H19.5723V18.3184H20.6035V19.7246ZM17.8027 18.3184V16.8652C17.8027 16.7285 17.8047 16.5664 17.8086 16.3789C17.8164 16.1914 17.8242 16.0039 17.832 15.8164C17.8398 15.6289 17.8477 15.4629 17.8555 15.3184C17.8672 15.1699 17.875 15.0664 17.8789 15.0078H17.832C17.7578 15.168 17.6797 15.3242 17.5977 15.4766C17.5156 15.625 17.4199 15.7812 17.3105 15.9453L15.7402 18.3184H17.8027Z" fill="#495057"/>
      </svg>
      </div>
    </div>
    <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
      <div style={{width: 104, textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Primary Packaging</div>
    </div>
  </div>
</div>

{/* choice input */}
<div style={{width: 650, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
  <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4.52, display: 'inline-flex'}}>
    <div style={{paddingBottom: 6.02, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 15.05, display: 'flex'}}>
      <div style={{color: '#212529', fontSize: 18.06, fontFamily: 'Open Sans', fontWeight: '600',  wordWrap: 'break-word'}}>What is this substrate used for?</div>
    </div>
  </div>
  <div style={{height: 15, paddingTop: 7.53, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 15.05, display: 'inline-flex'}} />
  <div style={{overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
    <div style={{width: 24, height: 24, padding: 2, borderRadius: 4, outline: '1px #CED4DA solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}} />
    <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '600',  wordWrap: 'break-word'}}>My own cultivation</div>
  </div>
  <div style={{height: 5, paddingTop: 7.53, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 15.05, display: 'inline-flex'}} />
  <div style={{overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
    <div style={{width: 24, height: 24, padding: 2, background: '#25262B', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
      <div style={{flex: '1 1 0', alignSelf: 'stretch', position: 'relative', overflow: 'hidden'}}>
        <div data-svg-wrapper style={{left: 3.33, top: 5, position: 'absolute'}}>
        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.6668 1.02002L5.50016 10.1867L1.3335 6.02002" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
      </div>
    </div>
    <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '600',  wordWrap: 'break-word'}}>Purchased starting materials</div>
  </div>
  <div style={{paddingTop: 7.53, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 15.05, display: 'inline-flex'}} />
</div>

{/* drop down for suppliers */}
<div data-disabled="false" data-grouping="false" data-radius="sm" data-required="true" data-size="md" data-state="default" data-variant="default" style={{width: 430, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
  <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 3, display: 'inline-flex'}}>
    <div style={{paddingBottom: 4, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
      <div style={{color: '#212529', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '600',  wordWrap: 'break-word'}}>Supplier</div>
    </div>
    <div style={{paddingBottom: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
      <div style={{color: '#F03E3E', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '600',  wordWrap: 'break-word'}}>*</div>
    </div>
  </div>
  <div style={{alignSelf: 'stretch', paddingBottom: 7, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
    <div style={{flex: '1 1 0', color: '#868E96', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400',  wordWrap: 'break-word'}}>Choose one from the drop down</div>
  </div>
  <div style={{alignSelf: 'stretch', height: 42, paddingTop: 6, paddingBottom: 6, borderRadius: 4, outline: '1px #CED4DA solid', outlineOffset: '-1px', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
    <div style={{paddingTop: 1, paddingBottom: 1, paddingLeft: 14, paddingRight: 10, justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
      <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#ADB5BD', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '400',  wordWrap: 'break-word'}}>Placeholder text</div>
    </div>
    <div style={{height: 30, paddingLeft: 11, paddingRight: 11, paddingTop: 9, paddingBottom: 9, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex'}}>
      <div style={{width: 20, height: 20, position: 'relative'}}>
        <div style={{width: 20, height: 10, left: 0, top: 10, position: 'absolute', overflow: 'hidden'}}>
          <div data-svg-wrapper style={{left: 6.67, top: 3.33, position: 'absolute'}}>
          <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.666504 1.3335L3.99984 4.66683L7.33317 1.3335" stroke="#868E96" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>
        </div>
        <div style={{width: 20, height: 10, left: 0, top: 0, position: 'absolute', overflow: 'hidden'}}>
          <div data-svg-wrapper style={{left: 6.67, top: 3.33, position: 'absolute'}}>
          <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.666504 4.6665L3.99984 1.33317L7.33317 4.6665" stroke="#868E96" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div style={{paddingTop: 5, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}} />
</div>

    </>
  );
}

export default Form
