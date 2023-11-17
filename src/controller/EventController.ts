import { Request, Response } from 'express';
import User from '../database/schemas/User';
import Event from '../database/schemas/Event';

class EventController {

    async create(request: Request, response: Response) {

        const { event_name, number_of_participants, company_name, event_details, userIds, event_organizer } = request.body;

        try {
            const event = await Event.create({
                event_name,
                number_of_participants,
                company_name,
                event_details,
                userIds,
                event_organizer
            });
            return response.status(201).json(event);
        } catch (error) {
            return response.status(400).json(error);
        }
    }

    async getAllEvents(request: Request, response: Response) {
        try {
            const events = await Event.find();

            return response.status(200).json(events);
        } catch (error) {
            return response.status(400).json(error);
        }
    }

    async getAllEventsByUserId(request: Request, response: Response) {
        const { id } = request.params;

        try {
            const events = await Event.find({ userIds: id });

            return response.status(200).json(events);
        } catch (error) {
            return response.status(400).json(error);
        }
    }

    async getEventById(request: Request, response: Response) {
        const { id } = request.params;

        try {
            const event = await Event.findById(id);

            return response.status(200).json(event);
        } catch (error) {
            return response.status(400).json(error);
        }
    }

    async getEventByOrganizerId(request: Request, response: Response) {
        const { id } = request.params;

        try {
            const event = await Event.find({ event_organizer: id });

            return response.status(200).json(event);
        } catch (error) {
            return response.status(400).json(error);
        }
    }

    async deleteEvent(request: Request, response: Response) {
        const { id } = request.params;

        try {
            const event = await Event.findByIdAndDelete(id);

            return response.status(200).json(event);
        } catch (error) {
            return response.status(400).json(error);
        }
    }

    async updateEvent(request: Request, response: Response) {
        const { id } = request.params;
        const { event_name, number_of_participants, company_name, event_details, userIds } = request.body;

        try {
            const event = await Event.findByIdAndUpdate(id, {
                event_name,
                number_of_participants,
                company_name,
                event_details,
                userIds
            }, { new: true });

            return response.status(200).json(event);
        } catch (error) {
            return response.status(400).json(error);
        }
    }

    async addUserToEvent(request: Request, response: Response) {

        const { eventId, userId } = request.params;
    
        await Event.findByIdAndUpdate(eventId, { $push: { userIds: userId } });
    
        return response.status(200).json({ message: 'User added to event successfully.' });
    }

    async removeUserFromEvent(request: Request, response: Response) {

        const { eventId, userId } = request.params;
    
        await Event.findByIdAndUpdate(eventId, { $pull: { userIds: userId } });

        return response.status(200).json({ message: 'User removed from event successfully.' });
    }

}

export default new EventController();
