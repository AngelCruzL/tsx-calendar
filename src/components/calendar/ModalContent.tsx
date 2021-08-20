import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import Swal from 'sweetalert2';

import { CustomEvent } from '../../interfaces';
import { eventAddNew, eventUpdated } from '../../actions/events';

import 'react-datepicker/dist/react-datepicker.css';
import 'sweetalert2/dist/sweetalert2.min.css';

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const endDate = now.clone().add(1, 'hours');

const ModalContent: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
  const dispatch = useDispatch();

  const [dateStart, setDateStart] = useState(now.toDate());
  const [dateEnd, setDateEnd] = useState(endDate.toDate());
  const [validTitle, setValidTitle] = useState(true);

  const [formValues, setFormValues] = useState<CustomEvent>({
    title: '',
    notes: '',
    start: now.toDate(),
    end: endDate.toDate(),
  });

  const { title, notes, start, end } = formValues;

  const { activeEvent } = useSelector(state => state.calendar);

  useEffect(() => {
    if (activeEvent) {
      const { start, end } = activeEvent;
      setDateStart(start);
      setDateEnd(end);
      setFormValues(activeEvent);
    }
  }, [activeEvent, setFormValues]);

  const handleInputChange = (e: {
    target: HTMLInputElement | HTMLTextAreaElement;
  }) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleStartDateChange = (e: Date) => {
    setDateStart(e);
    setFormValues({
      ...formValues,
      start: e,
    });
  };

  const handleEndDateChange = (e: Date) => {
    setDateEnd(e);
    setFormValues({
      ...formValues,
      end: e,
    });
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();

    const momentStart = moment(start);
    const momentEnd = moment(end);

    if (momentStart.isSameOrAfter(momentEnd)) {
      return Swal.fire(
        'Error!',
        'La fecha final debe ser mayor a la fecha de inicio',
        'error'
      );
    }

    if (title!.trim().length < 2) {
      return setValidTitle(false);
    }

    if (activeEvent) {
      dispatch(eventUpdated(formValues));
    } else {
      dispatch(
        eventAddNew({
          ...formValues,
          id: new Date().getTime(),
          user: {
            _id: new Date().getTime() + '',
            name: 'Luis',
          },
        })
      );
    }

    closeModal();
  };

  return (
    <>
      <h1> {activeEvent ? 'Editar evento' : 'Nuevo evento'} </h1>
      <hr />

      <form className="container" onSubmit={handleSubmitForm}>
        <div className="form-group">
          <label>Fecha y hora inicio</label>
          <DatePicker
            selected={dateStart}
            className="form-control"
            onChange={handleStartDateChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={5}
            timeCaption="time"
            dateFormat="MMM d, yyyy h:mm aa"
          />
        </div>

        <div className="form-group">
          <label>Fecha y hora fin</label>
          <DatePicker
            selected={dateEnd}
            className="form-control"
            onChange={handleEndDateChange}
            minDate={dateStart}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={5}
            timeCaption="time"
            dateFormat="MMM d, yyyy h:mm aa"
          />
        </div>

        <hr />
        <div className="form-group">
          <label>Titulo y notas</label>
          <input
            type="text"
            className={`form-control ${!validTitle && 'is-invalid'}`}
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={title}
            onChange={handleInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Notas"
            rows={5}
            name="notes"
            value={notes}
            onChange={handleInputChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </>
  );
};

export default ModalContent;
