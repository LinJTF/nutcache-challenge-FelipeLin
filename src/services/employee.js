import Api from './api';

const EmployeeService = { 
    getAllEmployees: async () => {
        const { data } = await Api.get('/nutemployee');
        return data;
    },

    getEmployeesById: async (id) => {
        const { data } = await Api.get(`/nutemployee/${id}`);
        return data;
    },

    createNewEmployee: async (employee) => {
        const { data } = await Api.post(`/nutemployee/`, employee);
        return data;
    },

    updateEmployee: async (id, employee) => {
        const { data } = await Api.put(`/nutemployee/${id}`, employee);
        return data;
    },

    deleteEmployee: async (id) => {
        const { data } = await Api.delete(`/nutemployee/${id}`);
        return data;
    }
};

export default EmployeeService;