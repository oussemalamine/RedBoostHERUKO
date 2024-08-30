<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> origin/main
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
} from 'reactstrap';
import axiosInstance from '../../axiosInstance';
import { useSelector, useDispatch } from 'react-redux';
import { setUserData } from '../../app/features/userData/userData';

const EditModal = ({ setUpdateLog, isOpen, setIsOpen }) => {
  const [editedData, setEditedData] = useState({});
  const user = useSelector((state) => state.userData.userData);
  const dispatch = useDispatch();

<<<<<<< HEAD
  useEffect(() => {
    if (isOpen) {
      setEditedData({});
    }
  }, [isOpen]);

=======
>>>>>>> origin/main
  const handleConfirm = async () => {
    try {
      const updatedData = { ...user, ...editedData };
      const response = await axiosInstance.put(`/users/${user._id}`, updatedData);

      if (response.status === 200) {
<<<<<<< HEAD
        dispatch(setUserData(response.data));
        if (typeof setUpdateLog === 'function') {
          setUpdateLog(response.data.logs); // Update logs only if setUpdateLog is a function
        } else {
          console.error('setUpdateLog is not a function');
        }
=======
        console.log('User updated successfully:', response.data);
        const currentDate = new Date().toLocaleDateString();
        const updatedLogs = [
          ...user.logs,
          {
            date: currentDate,
            events: Object.keys(editedData).map(
              (field) => `User updated ${field} at ${new Date().toLocaleTimeString()}`
            ),
          },
        ];
        dispatch(setUserData({ ...response.data, logs: updatedLogs }));
        setUpdateLog(updatedLogs);
>>>>>>> origin/main
      } else {
        console.error('Failed to update user:', response.statusText);
      }
    } catch (error) {
<<<<<<< HEAD
      console.error('Error updating user:', error);
    } finally {
      setIsOpen(false); // Ensure modal closes regardless of success or failure
    }
=======
      console.error('Error updating user:', error.message);
    }
    setIsOpen(false);
>>>>>>> origin/main
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Modal isOpen={isOpen} toggle={() => setIsOpen(false)} size="lg">
      <ModalHeader toggle={() => setIsOpen(false)}>Edit Profile</ModalHeader>
      <ModalBody>
        <Container>
          <Row>
            <Col md="12">
              <FormGroup>
                <Label for="bioInput">Bio</Label>
                <Input
                  type="textarea"
                  id="bioInput"
                  name="bio"
<<<<<<< HEAD
                  value={editedData.bio || user.bio}
=======
                  defaultValue={user.bio}
>>>>>>> origin/main
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="linkedinInput">LinkedIn</Label>
                <Input
                  type="text"
                  id="linkedinInput"
                  name="linkedIn"
<<<<<<< HEAD
                  value={editedData.linkedIn || user.linkedIn}
=======
                  defaultValue={user.linkedIn}
>>>>>>> origin/main
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="behanceInput">BeHance Link</Label>
                <Input
                  type="text"
                  id="behanceInput"
                  name="behance"
<<<<<<< HEAD
                  value={editedData.behance || user.behance}
=======
                  defaultValue={user.behance}
>>>>>>> origin/main
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleConfirm}>
          Save
        </Button>
        <Button color="secondary" onClick={() => setIsOpen(false)}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditModal;
