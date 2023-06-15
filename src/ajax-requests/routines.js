export const BASE_URL = 'http://fitnesstrac-kr.herokuapp.com/api/';

//* ROUTINES

  // GET /routines
export const routines = async () => {
  try {
    const response = await fetch(`${BASE_URL}/routines`, {
      method: "GET",
      headers: {
      'Content-Type': 'application/json',
      },
    });
    
    const result = await response.json();
    console.log(result);
    return result;

    } catch (err) {
    console.error(err);
    }
  }
   
    // POST /routines
  export const createRoutine = async (routine, token) => {
    try {
      const response = await fetch(`${BASE_URL}/routines`, {
        method: "POST",
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          routine
        })
      });

      const result = await response.json();
      console.log(result);
      return result;

    } catch (err) {
      console.error(err);
    }
  }

    // PATCH /routines/:routineId
  export const updateRoutine = async (routineId, token, routine) => {
    try {
      const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
        method: "PATCH",
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          routine
        })
      });
      const result = await response.json();
      console.log(result);
      return result;

    } catch (err) {
      console.error(err);
    }
  }

    // DELETE /routines/:routineId
  export const deleteRoutine = async (routineId, token) => {
    try {
      const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });

      const result = await response.json();
      console.log(result);
      return result;

    } catch (err) {
      console.error(err);
    }
  }

    // POST /routines/:routineId/activities
  export const attachActivity = async (routineId, activity) => {
    try {
      const response = await fetch (`${BASE_URL}/routines/${routineId}/activities`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: json.stringify({
          activity
        })
      });

      const result = await response.json();
      console.log(result);
      return result;
      
    } catch (err) {
      console.error(err);
    }
  }